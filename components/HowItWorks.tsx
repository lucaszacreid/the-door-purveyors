const steps = [
  {
    number: '01',
    title: 'We Visit',
    description:
      'Our team comes to you at a time that suits. We measure up, assess the space, and take the time to understand exactly what you need — no rushing, no guesswork.',
  },
  {
    number: '02',
    title: 'You Choose',
    description:
      'We present a curated selection of doors suited to your home and your budget. No pressure, no hard sell — just clear, honest options from people who know their craft.',
  },
  {
    number: '03',
    title: 'We Fit',
    description:
      'Our professional fitters handle everything from removing the old door to a perfect, clean installation. We leave no mess, no loose ends — just a door you\'ll love.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C49A27]" />
            <span className="text-[#C49A27] text-xs font-semibold tracking-[0.25em] uppercase font-body">
              The Process
            </span>
            <div className="w-8 h-px bg-[#C49A27]" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-stone-900">
            Simple. Transparent. Seamless.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+3rem)] right-[calc(16.666%+3rem)] h-px bg-stone-100" />

          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Number */}
              <div className="font-heading font-bold text-7xl md:text-8xl text-[#C49A27]/15 leading-none select-none mb-2 -ml-1 transition-colors duration-300 group-hover:text-[#C49A27]/25">
                {step.number}
              </div>
              {/* Accent line */}
              <div className="w-10 h-[2px] bg-[#C49A27] mb-6 transition-all duration-300 group-hover:w-16" />
              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
