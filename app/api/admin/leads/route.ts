import { NextResponse } from 'next/server'
import { getLeads } from '@/lib/leads'
import { isAuthenticated } from '@/lib/auth'

export async function GET(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const leads = await getLeads()
  return NextResponse.json({ leads: [...leads].reverse() })
}
