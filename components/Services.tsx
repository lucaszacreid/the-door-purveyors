const services = [
  {
    id: 'doors',
    title: 'Front Doors',
    description: 'Composite, timber and uPVC front doors supplied and fitted. We measure up, advise on the best option for your property, and install everything including the frame, hardware and seals.',
    features: ['Composite doors', 'Timber doors', 'uPVC doors', 'All hardware & locks included', 'Weatherproof sealing', 'Old door removed & disposed of'],
    popular: true,
  },
  {
    id: 'windows',
    title: 'Windows',
    description: 'Double and triple glazed windows supplied and fitted. We carry uPVC, aluminium and timber frame options and can replace single or multiple windows in one visit.',
    features: ['Double glazing', 'Triple glazing', 'uPVC, aluminium & timber frames', 'A-rated energy efficient glass', 'Full frame replacement', 'Old windows removed & disposed of'],
    popular: false,
  },
  {
    id: 'patio',
    title: 'Patio & Sliding Doors',
    description: 'French patio, bi-fold and sliding doors fitted on request. Get in touch to tell us about your project and we\'ll advise on the most practical option for your space.',
    features: ['French patio doors', 'Bi-fold doors', 'Sliding doors', 'uPVC & aluminium frames', 'Multipoint locking', 'Supply & fit included'],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-stone-900 mb-3">
            Our Services
          </h2>
          <p className="text-stone-500 text-base font-body max-w-2xl">
            We supply and fit a full range of doors and windows. All products are professionally installed by our own team — no subcontractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`border p-6 flex flex-col ${service.popular ? 'border-stone-900' : 'border-stone-200'}`}>
              {service.popular && (
                <span className="self-start text-[10px] font-semibold tracking-[0.15em] uppercase bg-stone-900 text-white px-3 py-1 mb-4 font-body">
                  Most Enquired
                </span>
              )}

              <h3 className="font-heading font-bold text-xl text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-body mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-2 mb-6 border-t border-stone-100 pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-stone-600 text-xs font-body">
                    <svg className="w-3.5 h-3.5 text-[#C49A27] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#enquire"
                className="text-center border border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 text-xs font-semibold tracking-wider uppercase py-3 transition-colors duration-200 font-body"
              >
                Enquire About This Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
