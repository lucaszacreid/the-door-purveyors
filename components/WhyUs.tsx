const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'All Work Guaranteed',
    description: 'Every installation comes with a workmanship guarantee. If something isn\'t right, we come back and sort it.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'No Hidden Costs',
    description: 'The price we quote is the price you pay. No surprise extras once the job is underway.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Same Team Throughout',
    description: 'The people who visit and survey are the same people who do the fitting. No subcontracting, no strangers turning up.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Energy Efficient',
    description: 'We stock A-rated windows and thermally efficient doors — good for your home\'s warmth and your energy bills.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Security Compliant',
    description: 'All doors and windows we fit meet current UK security standards — PAS 24 compliant where applicable.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: 'Clean & Tidy',
    description: 'We take away all old frames, packaging and waste. You get a new door or window — not a mess to clear up.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C49A27]" />
              <span className="text-[#C49A27] text-xs font-semibold tracking-[0.25em] uppercase font-body">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight">
              We Do the Job Right.<br />First Time.
            </h2>
          </div>
          <div>
            <p className="text-stone-500 text-base leading-relaxed font-body">
              A lot of trades companies quote low, subcontract the work and disappear when something goes wrong. We built The Door Purveyors to be straightforward — turn up, do the job properly, and stand behind it.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 lg:p-10 group hover:bg-stone-50 transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[#C49A27] border border-[#C49A27]/30 mb-6 group-hover:bg-[#C49A27] group-hover:text-black group-hover:border-[#C49A27] transition-all duration-200">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-stone-900 mb-3">{reason.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-body">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
