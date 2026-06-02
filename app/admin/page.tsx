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

function LeadDetail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-sm text-[#f8cf40] hover:text-[#e8b830] transition-colors break-all">
          {value}
        </a>
      ) : (
        <p className="text-sm text-white/80 break-words">{value || '—'}</p>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [password, setPassword] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#f8cf40] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-10 text-center">
            <div className="w-10 h-px bg-[#f8cf40] mx-auto mb-6" />
            <h1 className="font-heading font-bold text-2xl text-white mb-1">Admin Access</h1>
            <p className="text-white/30 text-sm font-body">Otago Doors</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="current-password"
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-[#f8cf40] transition-colors"
            />
            {loginError && <p className="text-red-400 text-sm font-body">{loginError}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f8cf40] hover:bg-[#e8b830] text-black font-semibold py-3 text-sm tracking-wider uppercase transition-colors disabled:opacity-50 font-body"
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
    <div className="min-h-screen bg-black font-body">
      {/* Header */}
      <header className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="text-white/20 hover:text-white/40 text-sm transition-colors">←</a>
          <div>
            <span className="font-heading font-bold text-white text-base">Otago Doors</span>
            <span className="text-white/20 text-sm ml-2">/ Admin</span>
          </div>
        </div>
        <button onClick={handleLogout} className="text-white/30 hover:text-white text-sm transition-colors">
          Sign Out
        </button>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-white text-2xl">Leads</h2>
            <p className="text-white/30 text-sm mt-1">
              {leads.length} total submission{leads.length !== 1 ? 's' : ''} — click any row to expand
            </p>
          </div>
          <button
            onClick={() => fetchLeads()}
            className="text-[#f8cf40] hover:text-[#e8b830] text-sm transition-colors flex items-center gap-2"
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
                  {['Name', 'Location', 'Door Type', 'Phone', 'Email', 'Submitted', ''].map((h, i) => (
                    <th
                      key={i}
                      className="text-left text-white/25 font-semibold py-3 pr-6 text-[10px] tracking-[0.15em] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => {
                  const isExpanded = expandedId === lead.id
                  return (
                    <>
                      <tr
                        key={lead.id}
                        onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                      >
                        <td className="text-white font-medium py-4 pr-6 whitespace-nowrap">{lead.name}</td>
                        <td className="text-white/50 py-4 pr-6 whitespace-nowrap">{lead.location}</td>
                        <td className="py-4 pr-6">
                          <span className="text-[#f8cf40] text-[10px] font-semibold px-2.5 py-1 border border-[#f8cf40]/30 uppercase tracking-wider whitespace-nowrap">
                            {lead.doorType}
                          </span>
                        </td>
                        <td className="text-white/50 py-4 pr-6 whitespace-nowrap">{lead.phone}</td>
                        <td className="text-white/50 py-4 pr-6 whitespace-nowrap">{lead.email}</td>
                        <td className="text-white/25 py-4 pr-6 text-xs whitespace-nowrap">
                          {new Date(lead.submittedAt).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'short', year: 'numeric',
                          })}
                          <br />
                          <span className="text-white/15">
                            {new Date(lead.submittedAt).toLocaleTimeString('en-GB', {
                              hour: '2-digit', minute: '2-digit',
                            })}
                          </span>
                        </td>
                        <td className="py-4 text-white/20 group-hover:text-white/50 transition-colors">
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </td>
                      </tr>

                      {/* Expanded detail row */}
                      {isExpanded && (
                        <tr key={`${lead.id}-expanded`} className="border-b border-white/5">
                          <td colSpan={7} className="px-0 py-0">
                            <div className="bg-white/[0.03] border-l-2 border-[#f8cf40] mx-0 px-8 py-6">
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                                <LeadDetail label="Full Name" value={lead.name} />
                                <LeadDetail label="Location" value={lead.location} />
                                <LeadDetail label="Door Type" value={lead.doorType} />
                                <LeadDetail
                                  label="Phone"
                                  value={lead.phone}
                                  href={`tel:${lead.phone}`}
                                />
                                <LeadDetail
                                  label="Email"
                                  value={lead.email}
                                  href={`mailto:${lead.email}`}
                                />
                                <LeadDetail
                                  label="Submitted"
                                  value={new Date(lead.submittedAt).toLocaleString('en-GB', {
                                    day: 'numeric', month: 'long', year: 'numeric',
                                    hour: '2-digit', minute: '2-digit',
                                  })}
                                />
                              </div>

                              {lead.message && (
                                <div>
                                  <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-2">Message</p>
                                  <p className="text-sm text-white/70 leading-relaxed max-w-2xl whitespace-pre-wrap">{lead.message}</p>
                                </div>
                              )}

                              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5">
                                <a
                                  href={`mailto:${lead.email}`}
                                  className="inline-flex items-center gap-2 bg-[#f8cf40] hover:bg-[#e8b830] text-black text-xs font-semibold px-4 py-2 tracking-wider uppercase transition-colors"
                                  onClick={e => e.stopPropagation()}
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  Email {lead.name.split(' ')[0]}
                                </a>
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-xs font-semibold px-4 py-2 tracking-wider uppercase transition-colors"
                                  onClick={e => e.stopPropagation()}
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                  Call
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
