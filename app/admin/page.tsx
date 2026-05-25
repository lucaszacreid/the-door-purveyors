'use client'

import { useState, useEffect, useCallback } from 'react'

interface Lead {
  id: string
  name: string
  location: string
  doorType: string
  phone: string
  email: string
  message: string
  submittedAt: string
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [password, setPassword] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchLeads = useCallback(async (): Promise<boolean> => {
    const res = await fetch('/api/admin/leads')
    if (res.ok) {
      const data = await res.json()
      setLeads(data.leads)
      setIsLoggedIn(true)
      return true
    }
    return false
  }, [])

  useEffect(() => {
    fetchLeads().finally(() => setInitialized(true))
  }, [fetchLeads])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoginError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      await fetchLeads()
    } else {
      setLoginError('Invalid password. Please try again.')
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    setIsLoggedIn(false)
    setLeads([])
    setPassword('')
  }

  if (!initialized) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#C49A27] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-10 text-center">
            <div className="w-10 h-px bg-[#C49A27] mx-auto mb-6" />
            <h1 className="font-heading font-bold text-2xl text-white mb-1">Admin Access</h1>
            <p className="text-white/30 text-sm font-body">The Door Purveyors</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="current-password"
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-[#C49A27] transition-colors"
            />

            {loginError && (
              <p className="text-red-400 text-sm font-body">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C49A27] hover:bg-[#D4AF37] text-black font-semibold py-3 text-sm tracking-wider uppercase transition-colors disabled:opacity-50 font-body"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-8 text-center">
            <a href="/" className="text-white/20 hover:text-white/40 text-xs transition-colors font-body">
              ← Back to site
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080808] font-body">
      {/* Header */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="text-white/20 hover:text-white/40 text-sm transition-colors">
            ←
          </a>
          <div>
            <span className="font-heading font-bold text-white text-base">The Door Purveyors</span>
            <span className="text-white/20 text-sm ml-2">/ Admin</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-white/30 hover:text-white text-sm transition-colors"
        >
          Sign Out
        </button>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-white text-2xl">Leads</h2>
            <p className="text-white/30 text-sm mt-1">{leads.length} total submission{leads.length !== 1 ? 's' : ''}</p>
          </div>
          <button
            onClick={() => fetchLeads()}
            className="text-[#C49A27] hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-24 border border-white/5">
            <p className="text-white/20 text-sm">No leads yet.</p>
            <p className="text-white/10 text-xs mt-2">Submissions will appear here once the form is used.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {['Name', 'Location', 'Door Type', 'Phone', 'Email', 'Message', 'Submitted'].map(h => (
                    <th
                      key={h}
                      className="text-left text-white/25 font-semibold py-3 pr-6 text-[10px] tracking-[0.15em] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="text-white font-medium py-4 pr-6 whitespace-nowrap">{lead.name}</td>
                    <td className="text-white/50 py-4 pr-6 whitespace-nowrap">{lead.location}</td>
                    <td className="py-4 pr-6">
                      <span className="text-[#C49A27] text-[10px] font-semibold px-2.5 py-1 border border-[#C49A27]/30 uppercase tracking-wider whitespace-nowrap">
                        {lead.doorType}
                      </span>
                    </td>
                    <td className="text-white/50 py-4 pr-6 whitespace-nowrap">{lead.phone}</td>
                    <td className="text-white/50 py-4 pr-6">
                      <a href={`mailto:${lead.email}`} className="hover:text-[#C49A27] transition-colors">
                        {lead.email}
                      </a>
                    </td>
                    <td className="text-white/30 py-4 pr-6 max-w-[200px] truncate" title={lead.message}>
                      {lead.message || <span className="text-white/15">—</span>}
                    </td>
                    <td className="text-white/25 py-4 pr-6 text-xs whitespace-nowrap">
                      {new Date(lead.submittedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                      <br />
                      <span className="text-white/15">
                        {new Date(lead.submittedAt).toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
