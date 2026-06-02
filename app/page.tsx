import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
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
        <TrustBar />
        <HowItWorks />
        <Services />
        <WhyUs />
        <section id="enquire" className="py-20 bg-black border-t border-white/10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                Request a Free Home Survey
              </h2>
              <p className="text-white/55 text-base font-body">
                Fill in your details below and we&apos;ll be in touch to arrange a convenient time to visit. No charge, no obligation.
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
