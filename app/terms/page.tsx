import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Otago Doors',
  description: 'Terms and conditions for using Otago Doors services.',
}

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction and Acceptance of Terms',
    content: [
      'These Terms and Conditions ("Terms") govern your use of the Otago Doors website and the services we provide. By accessing our website or submitting an enquiry, you confirm that you have read, understood, and agree to be bound by these Terms.',
      'Otago Doors is a door installation service operating across the United Kingdom. We reserve the right to update or amend these Terms at any time. Continued use of our website following any changes constitutes your acceptance of the revised Terms. The date of the most recent revision will be indicated at the bottom of this page.',
    ],
  },
  {
    id: 'eligibility',
    title: '2. Eligibility and Registration',
    content: [
      'Our services are available to individuals aged 18 or over who are residents of the United Kingdom. By submitting an enquiry or entering into a service agreement with Otago Doors, you confirm that you meet this eligibility criteria.',
      'To request a quotation or book a service, you will be required to provide your full name, email address, and phone number. You agree that all information you provide is accurate, current, and complete. Otago Doors reserves the right to refuse service to any person who provides false or misleading information.',
      'You are responsible for ensuring that the contact details you submit are your own and that you are authorised to provide them.',
    ],
  },
  {
    id: 'information',
    title: '3. Information We Collect',
    content: [
      'When you submit an enquiry through our website, we collect the following personal information:',
      '— Full name\n— Email address\n— Phone number\n— Location (town, city, or postcode area)\n— Any additional details you choose to provide in the message field',
      'This information is collected solely for the purpose of responding to your enquiry and arranging the provision of our services. Please refer to our Privacy Policy for full details of how we handle your personal data.',
    ],
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use of Services',
    content: [
      'You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of this website.',
      'You must not use our website to transmit any unsolicited communications, to attempt to gain unauthorised access to any part of our systems, or to engage in any conduct that is harmful, fraudulent, or deceptive.',
      'Otago Doors reserves the right to refuse or withdraw services at its discretion where misuse is suspected or confirmed.',
    ],
  },
  {
    id: 'payments',
    title: '5. Service Agreements and Payments',
    content: [
      'All pricing for door supply and installation will be provided following a free home survey. No payment is required to request a survey or obtain a quotation. Quotations are provided without obligation.',
      'Where a service agreement is entered into, the specific payment terms — including deposit requirements, staged payments, and final balances — will be set out clearly in writing before any work commences. You will not be charged for anything not agreed in advance.',
      'Otago Doors accepts payment by bank transfer and other methods as agreed at the time of booking. All prices quoted are inclusive of VAT where applicable.',
    ],
  },
  {
    id: 'cancellation',
    title: '6. Cancellation and Termination',
    content: [
      'You may cancel or reschedule a booked survey or installation appointment at any time by contacting us directly. We ask for at least 24 hours\' notice where possible.',
      'Where a deposit has been paid and work has not yet commenced, refund terms will be set out in the individual service agreement. If Otago Doors has already purchased materials specifically for your job, reasonable costs may be deducted from any refund.',
      'Otago Doors reserves the right to terminate a service agreement if payment obligations are not met or if circumstances arise that make completion of the work impractical or unsafe.',
    ],
  },
  {
    id: 'liability',
    title: '7. Liability Limitations',
    content: [
      'Otago Doors takes reasonable care to ensure that all installation work is completed to a high standard and that our website is accurate and up to date. However, we do not guarantee that the website will be uninterrupted or error-free.',
      'Our liability to you in connection with any service provided shall not exceed the total amount paid by you for that service. We shall not be liable for any indirect, consequential, or incidental losses arising from your use of our services or this website, except where such liability cannot be excluded by law.',
      'Nothing in these Terms limits or excludes our liability for death or personal injury caused by negligence, fraud, or any other matter where it would be unlawful to do so.',
    ],
  },
  {
    id: 'governing-law',
    title: '8. Governing Law',
    content: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of Scotland. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the Scottish courts.',
    ],
  },
  {
    id: 'contact',
    title: '9. Contact Details',
    content: [
      'If you have any questions about these Terms and Conditions, please contact us:',
      'Otago Doors\n[Your Address]\nUnited Kingdom\nEmail: hub3324@outlook.com\nPhone: 07724 311443',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black font-body">

      {/* Nav */}
      <header className="border-b border-white/10 bg-black sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-logo font-bold text-base uppercase tracking-widest">
            <span style={{ WebkitTextStroke: '1.5px #f8cf40', color: 'transparent' }}>Otago</span>
            <span className="text-[#f8cf40]"> Doors</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <Link href="/terms" className="text-[#f8cf40]">Terms</Link>
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-[#f8cf40] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Legal</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/50 text-sm">Last updated: June 2025</p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="border-t border-white/10 pt-10">
              <h2 className="font-heading font-bold text-lg text-white mb-5">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-white/65 text-sm leading-relaxed whitespace-pre-line">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Otago Doors. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/terms" className="text-[#f8cf40]/60 hover:text-[#f8cf40] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
