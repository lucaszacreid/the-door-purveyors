const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description: 'Call us or fill in the enquiry form. Tell us what you\'re looking for and we\'ll get back to you quickly to arrange a visit.',
  },
  {
    number: '02',
    title: 'Free Home Survey',
    description: 'We come to your property, measure up properly and assess the job. This is completely free and there\'s no obligation to go ahead.',
  },
  {
    number: '03',
    title: 'Choose Your Products',
    description: 'We show you the options that fit your home and budget — styles, materials, glazing, hardware. We\'ll give you straightforward advice on what works best.',
  },
  {
    number: '04',
    title: 'We Supply Everything',
    description: 'Once you\'re happy, we order and supply all the products. You don\'t need to source anything yourself — we handle it all.',
  },
  {
    number: '05',
    title: 'Professional Installation',
    description: 'Our team fits everything to a high standard. We remove and dispose of your old door, fit the new one, and leave everything clean and tidy.',
  },
  {
    number: '06',
    title: 'Aftercare & Guarantee',
    description: 'All our work is guaranteed. If anything isn\'t right after we\'ve finished, we\'ll come back and sort it — no arguments, no excuses.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#3b3a3a] mb-3">
            From Enquiry to Installation — How It Works
          </h2>
          <p className="text-stone-500 text-base font-body max-w-2xl">
            We manage the whole process so you don&apos;t have to. Here&apos;s exactly what happens when you get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-stone-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#3b3a3a] text-white font-heading font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-[#3b3a3a] text-base">{step.title}</h3>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
