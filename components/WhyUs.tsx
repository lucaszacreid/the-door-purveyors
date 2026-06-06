const reasons = [
  { title: 'Free home survey with no obligation' },
  { title: 'One team handles everything — no subcontractors' },
  { title: 'All work is guaranteed — we come back if anything isn\'t right' },
  { title: 'Fixed, transparent pricing agreed before work starts' },
  { title: 'We supply all products — you don\'t need to source anything' },
  { title: 'Energy efficient, thermally rated doors available' },
  { title: 'All installations meet current UK security standards' },
  { title: 'We remove and dispose of your old door' },
  { title: 'Clean and tidy — we leave your home as we found it' },
  { title: 'Friendly, straightforward service with no hard sell' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#1e2d3d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Why Choose Otago Doors?
            </h2>
            <p className="text-white/55 text-base font-body leading-relaxed mb-6">
              There are plenty of door companies out there. Here&apos;s what makes us different — and why our customers come back and recommend us to their neighbours.
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 bg-[#b07d3a] hover:bg-[#9a6d31] text-black font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Get Your Free Survey
            </a>
          </div>

          <ul className="space-y-3">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-start gap-3 text-white/75 text-sm font-body">
                <svg className="w-4 h-4 text-[#b07d3a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {reason.title}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
