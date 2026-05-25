import { NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, location, doorType, phone, email, message } = body

    if (!name || !location || !doorType || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const lead = await saveLead({
      name: String(name).trim(),
      location: String(location).trim(),
      doorType: String(doorType).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      message: message ? String(message).trim() : '',
    })

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Failed to save lead:', error)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
  }
}
