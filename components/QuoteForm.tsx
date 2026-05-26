'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface FormData {
  name: string
  location: string
  doorType: string
  phone: string
  email: string
  message: string
}

const initial: FormData = { name: '', location: '', doorType: '', phone: '', email: '', message: '' }

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initial)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Location autocomplete
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionsLoading, setSuggestionsLoading] = useState(false)
  const locationWrapperRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (locationWrapperRef.current && !locationWrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Debounced location lookup
  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }
    setSuggestionsLoading(true)
    try {
      const res = await fetch(`/api/location-suggest?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setSuggestions(data.suggestions ?? [])
      setShowSuggestions((data.suggestions ?? []).length > 0)
    } catch {
      // fail silently — user can still type freely
    } finally {
      setSuggestionsLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => fetchSuggestions(form.location), 320)
    return () => clearTimeout(timer)
  }, [form.location, fetchSuggestions])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSelectSuggestion = (suggestion: string) => {
    setForm(prev => ({ ...prev, location: suggestion }))
    setSuggestions([])
    setShowSuggestions(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setForm(initial)
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 border border-[#C49A27]/40 flex items-center justify-center mx-auto mb-8">
          <svg className="w-7 h-7 text-[#C49A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-stone-900 mb-3">Enquiry Received</h3>
        <p className="text-stone-500 text-base mb-8 max-w-sm mx-auto font-body">
          Thank you. We&apos;ll be in touch shortly to arrange your free consultation visit.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#C49A27] text-sm font-semibold hover:text-[#D4AF37] transition-colors font-body tracking-wide"
        >
          Submit another enquiry →
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 text-sm font-body placeholder:text-stone-400 focus:outline-none focus:border-[#C49A27] transition-colors duration-200'

  const labelClass = 'block text-[11px] font-semibold text-stone-400 uppercase tracking-[0.15em] mb-2 font-body'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>

        {/* Location with autocomplete */}
        <div ref={locationWrapperRef} className="relative">
          <label htmlFor="location" className={labelClass}>Location *</label>
          <div className="relative">
            <input
              id="location"
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
              required
              autoComplete="off"
              placeholder="Start typing a town, city or postcode…"
              className={inputClass}
            />
            {suggestionsLoading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-3.5 h-3.5 border border-stone-300 border-t-[#C49A27] rounded-full animate-spin" />
              </div>
            )}
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-stone-200 shadow-lg max-h-56 overflow-auto">
              {suggestions.map((s, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onMouseDown={() => handleSelectSuggestion(s)}
                    className="w-full text-left px-4 py-2.5 text-sm text-stone-700 font-body hover:bg-stone-50 hover:text-stone-900 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-[#C49A27] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="doorType" className={labelClass}>Door Type *</label>
          <div className="relative">
            <select
              id="doorType"
              name="doorType"
              value={form.doorType}
              onChange={handleChange}
              required
              className={`${inputClass} appearance-none cursor-pointer pr-10`}
            >
              <option value="">Select door type…</option>
              <option value="Front Door">Front Door</option>
              <option value="Patio Door">Patio Door</option>
              <option value="Sliding Door">Sliding Door</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+44 7700 900000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us a bit more — current door condition, specific requirements, preferred timing, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm font-body">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#C49A27] hover:bg-[#D4AF37] text-black font-semibold py-4 text-sm tracking-wider uppercase transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-body"
      >
        {status === 'loading' ? 'Sending…' : 'Enquire Now'}
      </button>

      <p className="text-center text-xs text-stone-400 font-body">
        No obligation. We&apos;ll contact you to arrange a convenient time.
      </p>
    </form>
  )
}
