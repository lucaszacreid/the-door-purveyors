export default function Hero() {
  return (
    <section className="bg-stone-900 pt-36 md:pt-44 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: main content */}
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
              Door &amp; Window Installation —{' '}
              <span className="text-[#C49A27]">Full Service, Start to Finish</span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 font-body">
              We handle everything from your first enquiry right through to a fully fitted and guaranteed installation. No middlemen, no subcontractors — just one team doing the whole job.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Free home survey included',
                'Front doors, windows, patio & sliding doors',
                'Supply and fit — we source everything',
                'All work fully guaranteed',
                'Competitive, transparent pricing',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/75 text-sm font-body">
                  <svg className="w-4 h-4 text-[#C49A27] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquire"
                className="inline-flex items-center justify-center bg-[#C49A27] hover:bg-[#D4AF37] text-black font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-colors duration-200"
              >
                Get a Free Survey
              </a>
              <a
                href="tel:+447919965366"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right: what's included box */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="font-heading font-bold text-white text-lg mb-6">What&apos;s Included in Our Service</h2>
            <div className="space-y-5">
              {[
                { step: '1', title: 'Free Home Survey', desc: 'We visit, measure up and assess exactly what\'s needed.' },
                { step: '2', title: 'No-Obligation Quote', desc: 'Clear, itemised pricing — no hidden extras.' },
                { step: '3', title: 'Product Selection', desc: 'We help you choose the right doors or windows for your home.' },
                { step: '4', title: 'Supply & Fit', desc: 'We source and fit everything — you don\'t lift a finger.' },
                { step: '5', title: 'Guaranteed Finish', desc: 'All work is guaranteed. We don\'t leave until it\'s right.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-7 h-7 bg-[#C49A27] text-black font-heading font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm font-body">{item.title}</p>
                    <p className="text-white/45 text-xs font-body mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
