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

export async function getLeads(): Promise<Lead[]> {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(content) as Lead[]
  } catch {
    return []
  }
}

export async function saveLead(lead: Omit<Lead, 'id' | 'submittedAt'>): Promise<Lead> {
  const leads = await getLeads()
  const newLead: Lead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    submittedAt: new Date().toISOString(),
  }
  leads.push(newLead)
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  return newLead
}
