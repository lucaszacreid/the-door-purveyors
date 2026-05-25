export const ADMIN_PASSWORD = 'admin123'
export const SESSION_VALUE = 'tdp-auth-session-v1'
export const COOKIE_NAME = 'tdp_admin_session'

export function isAuthenticated(request: Request): boolean {
  const cookieHeader = request.headers.get('cookie') ?? ''
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...v] = c.trim().split('=')
      return [key.trim(), v.join('=')]
    })
  )
  return cookies[COOKIE_NAME] === SESSION_VALUE
}
