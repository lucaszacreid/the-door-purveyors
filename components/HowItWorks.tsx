const steps = [
  {
    number: '01',
    title: 'We Visit',
    description:
      'We come to you at a time that suits. We measure up properly, assess what\'s needed and make sure we understand the job before anything else.',
  },
  {
    number: '02',
    title: 'You Choose',
    description:
      'We show you the options that work for your home and your budget — doors, windows, frames, glazing. No pushy sales, just straight advice.',
  },
  {
    number: '03',
    title: 'We Fit',
    description:
      'Our fitters handle everything from start to finish. We remove the old, fit the new, and leave the place clean and tidy — job done.',
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
            Straightforward, Start to Finish.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="font-heading font-bold text-7xl md:text-8xl text-[#C49A27]/15 leading-none select-none mb-2 -ml-1 transition-colors duration-300 group-hover:text-[#C49A27]/25">
                {step.number}
              </div>
              <div className="w-10 h-[2px] bg-[#C49A27] mb-6 transition-all duration-300 group-hover:w-16" />
              <h3 className="font-heading font-bold text-xl text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
