import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'leads.json')

export interface Lead {
  id: string
  name: string
  location: string
  doorType: string
  phone: string
  email: string
  message: string
  submittedAt: string
}

// --- Postgres helpers (used when DATABASE_URL env var is set) ---

function getDbUrl() {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || null
}

async function getSql() {
  const url = getDbUrl()
  if (!url) return null
  const { default: postgres } = await import('postgres')
  return postgres(url, { ssl: 'require', max: 1, idle_timeout: 20 })
}

async function ensureTable(sql: Awaited<ReturnType<typeof getSql>>) {
  if (!sql) return
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id          TEXT        PRIMARY KEY,
      name        TEXT        NOT NULL,
      location    TEXT        NOT NULL,
      door_type   TEXT        NOT NULL,
      phone       TEXT        NOT NULL,
      email       TEXT        NOT NULL,
      message     TEXT        NOT NULL DEFAULT '',
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}

// --- Public API ---

export async function getLeads(): Promise<Lead[]> {
  const sql = await getSql()

  if (sql) {
    try {
      await ensureTable(sql)
      const rows = await sql<Lead[]>`
        SELECT id, name, location, door_type AS "doorType", phone, email,
               message, submitted_at AS "submittedAt"
        FROM leads
        ORDER BY submitted_at DESC
      `
      return rows
    } finally {
      await sql.end()
    }
  }

  // Local fallback: JSON file
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(content) as Lead[]
  } catch {
    return []
  }
}

export async function saveLead(lead: Omit<Lead, 'id' | 'submittedAt'>): Promise<Lead> {
  const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
  const now = new Date().toISOString()
  const sql = await getSql()

  if (sql) {
    try {
      await ensureTable(sql)
      await sql`
        INSERT INTO leads (id, name, location, door_type, phone, email, message, submitted_at)
        VALUES (${id}, ${lead.name}, ${lead.location}, ${lead.doorType},
                ${lead.phone}, ${lead.email}, ${lead.message}, ${now})
      `
    } finally {
      await sql.end()
    }
    return { ...lead, id, submittedAt: now }
  }

  // Local fallback: JSON file
  const leads = await getLeads()
  const newLead: Lead = { ...lead, id, submittedAt: now }
  leads.push(newLead)
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  return newLead
}
