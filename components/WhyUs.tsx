const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'We quote clearly from the start. No hidden costs, no last-minute surprises — just honest pricing you can trust.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'One Team, Start to Finish',
    description: 'The same professionals who visit and advise you are the ones who fit your door. Consistency you can count on.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'You Choose, We Fit',
    description: 'We bring the options to you. Review them in your own home, in your own time — no showroom pressure, ever.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Expert Fitters',
    description: 'Fully trained and experienced professionals who take real pride in precision, finish, and doing the job properly.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hassle-Free Process',
    description: 'From booking to final fit, we manage everything. You get a new door — not a new headache.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'UK-Wide Service',
    description: 'Serving homeowners across the UK with the same reliable, professional standard every time, everywhere.',
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
              Built on Trust.<br />Finished with Care.
            </h2>
          </div>
          <div>
            <p className="text-stone-500 text-base leading-relaxed font-body">
              Most trades arrive, quote, disappear, and then come back with a different team and a bigger bill. We built The Door Purveyors to be the opposite — a single, seamless service you can actually rely on.
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
