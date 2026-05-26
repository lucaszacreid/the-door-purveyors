const services = [
  {
    id: 'doors',
    badge: 'Most Popular',
    badgeStyle: 'bg-[#C49A27] text-black',
    title: 'Front Doors',
    subtitle: 'Supply and fit, fully installed.',
    description:
      'Composite, timber and uPVC front doors fitted to a high standard. We measure up, help you choose the right door for your home, and fit it properly — including frame, hardware and weatherproofing.',
    features: ['Composite doors', 'Timber doors', 'uPVC doors', 'All hardware included', 'Draught & weatherproof seal'],
  },
  {
    id: 'windows',
    badge: 'Available',
    badgeStyle: 'border border-white/20 text-white/60',
    title: 'Windows',
    subtitle: 'Double & triple glazing fitted.',
    description:
      'Energy-efficient double and triple glazed windows, supplied and fitted. uPVC, aluminium and timber frames available. We\'ll advise on what suits your property best.',
    features: ['Double glazing', 'Triple glazing', 'uPVC & aluminium frames', 'A-rated energy efficient', 'Full replacement service'],
  },
  {
    id: 'patio',
    badge: 'On Request',
    badgeStyle: 'border border-white/20 text-white/60',
    title: 'Patio & Sliding Doors',
    subtitle: 'French, bi-fold and sliding.',
    description:
      'Patio, bi-fold and sliding doors fitted on request. Get in touch to discuss your project and we\'ll advise on the best option for your space.',
    features: ['French patio doors', 'Bi-fold doors', 'Sliding doors', 'Aluminium & uPVC frames'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C49A27]" />
            <span className="text-[#C49A27] text-xs font-semibold tracking-[0.25em] uppercase font-body">
              What We Install
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Doors & Windows, Done Properly.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col p-8 lg:p-10 bg-[#080808] group transition-colors duration-300 hover:bg-[#0f0f0f]"
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C49A27] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Badge */}
              <span className={`self-start text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 mb-8 font-body ${service.badgeStyle}`}>
                {service.badge}
              </span>

              {/* Content */}
              <h3 className="font-heading font-bold text-2xl text-white mb-2">{service.title}</h3>
              <p className="text-[#C49A27] text-sm italic font-body mb-5">{service.subtitle}</p>
              <p className="text-white/50 text-sm leading-relaxed font-body mb-8 flex-grow">{service.description}</p>

              {/* Feature list */}
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/40 text-xs font-body">
                    <span className="w-1 h-1 rounded-full bg-[#C49A27] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#quote"
                className="mt-8 self-start text-[#C49A27] text-xs font-semibold tracking-widest uppercase font-body hover:text-[#D4AF37] transition-colors flex items-center gap-2 group/cta"
              >
                Enquire Now
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
