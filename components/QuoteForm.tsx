'use client'

import { useState } from 'react'

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

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
        <div>
          <label htmlFor="location" className={labelClass}>Location *</label>
          <input
            id="location"
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            placeholder="e.g. Manchester, M1 2AB"
            className={inputClass}
          />
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
