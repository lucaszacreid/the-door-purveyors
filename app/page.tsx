import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <WhyUs />
        <section id="quote" className="py-24 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C49A27]" />
                <span className="text-[#C49A27] text-xs font-semibold tracking-[0.2em] uppercase font-body">
                  Free Consultation
                </span>
                <div className="w-8 h-px bg-[#C49A27]" />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-stone-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-stone-500 text-base md:text-lg max-w-xl mx-auto">
                Fill in your details and we'll be in touch to arrange a visit. No obligation, no hard sell.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
