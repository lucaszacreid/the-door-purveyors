import { NextResponse } from 'next/server'
import { ADMIN_PASSWORD, SESSION_VALUE, COOKIE_NAME } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })
    response.cookies.set(COOKIE_NAME, SESSION_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }
}
