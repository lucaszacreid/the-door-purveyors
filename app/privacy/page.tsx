import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Otago Doors',
  description: 'Privacy policy for Otago Doors — how we collect, use, and protect your personal data.',
}

const sections = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    content: [
      'Otago Doors ("we", "us", "our") is a door installation service operating across the United Kingdom. We are the data controller responsible for the personal information you provide to us through this website.',
      'Our contact details are:\nOtago Doors\n[Your Address]\nUnited Kingdom\nEmail: hub3324@outlook.com\nPhone: 07724 311443',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: [
      'We collect the following personal information when you submit an enquiry through our website:',
      '— Full name\n— Email address\n— Phone number\n— Location (town, city, or postcode area)\n— Any additional information you voluntarily provide in the message field',
      'We also collect limited website usage data automatically when you visit our site. This may include your IP address, browser type, device type, pages visited, and the date and time of your visit. This data is collected through standard server logs and, where applicable, cookies. See Section 9 for more information on cookies.',
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: [
      'We use the personal information you provide for the following purposes:',
      '— To respond to your enquiry and arrange a free home survey\n— To provide quotations and carry out door installation services\n— To communicate with you about your booking or service agreement\n— To maintain records of work carried out\n— To comply with our legal and regulatory obligations',
      'We will not use your information for automated decision-making or profiling. We will not contact you for marketing purposes without your explicit consent.',
    ],
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing (UK GDPR)',
    content: [
      'We process your personal data under the following lawful bases as set out in the UK General Data Protection Regulation (UK GDPR):',
      '— Contract: Processing is necessary to respond to your enquiry and, where applicable, to carry out a service agreement with you.\n— Legitimate interests: We have a legitimate interest in responding to enquiries made through our website and in maintaining records of our business activities, provided this does not override your rights and interests.\n— Legal obligation: Where we are required to retain certain information to comply with applicable law.',
    ],
  },
  {
    id: 'data-sharing',
    title: '5. Data Sharing',
    content: [
      'We do not sell, rent, or trade your personal information to any third party.',
      'We may share your information with trusted third-party service providers who assist us in operating our website or delivering our services (such as hosting providers or software platforms). These providers are contractually obligated to keep your information secure and to use it only for the purposes we specify.',
      'We may also disclose your information where required by law, regulation, or court order, or where necessary to protect the rights, property, or safety of Otago Doors or others.',
    ],
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: [
      'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.',
      'Enquiry data (name, contact details, message) is retained for up to 2 years from the date of initial contact, unless a service agreement has been entered into, in which case we retain relevant records for up to 7 years for accounting and legal compliance purposes.',
      'You may request deletion of your data at any time (subject to any legal retention obligations) by contacting us at hub3324@outlook.com.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights Under UK GDPR',
    content: [
      'Under UK data protection law, you have the following rights regarding your personal data:',
      '— Right of access: You have the right to request a copy of the personal data we hold about you.\n— Right to rectification: You have the right to request correction of inaccurate or incomplete data.\n— Right to erasure: You have the right to request deletion of your personal data in certain circumstances.\n— Right to data portability: You have the right to receive your data in a structured, commonly used format.\n— Right to object: You have the right to object to processing based on our legitimate interests.\n— Right to restrict processing: You have the right to request that we limit how we use your data in certain circumstances.',
      'To exercise any of these rights, please contact us at hub3324@outlook.com. We will respond to all valid requests within one calendar month. There is no charge for exercising these rights unless requests are manifestly unfounded or excessive.',
    ],
  },
  {
    id: 'ico',
    title: '8. ICO and Complaints',
    content: [
      'You have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) if you believe your personal data has been handled unlawfully.',
      'ICO contact details:\nInformation Commissioner\'s Office\nWycliffe House, Water Lane\nWilmslow, Cheshire, SK9 5AF\nTelephone: 0303 123 1113\nWebsite: ico.org.uk',
      'We would, however, appreciate the opportunity to address your concerns before you contact the ICO. Please contact us first at hub3324@outlook.com.',
    ],
  },
  {
    id: 'cookies',
    title: '9. Cookies',
    content: [
      'Our website may use cookies — small text files placed on your device — to enable basic functionality and to understand how visitors use the site.',
      'We use the following types of cookies:',
      '— Essential cookies: Required for the website to function correctly (e.g. session management).\n— Analytics cookies: Used to collect anonymous information about how visitors use our site, helping us improve the user experience. No personally identifiable data is collected through analytics cookies.',
      'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website. By continuing to use our website, you consent to our use of cookies as described above.',
    ],
  },
  {
    id: 'security',
    title: '10. Data Security',
    content: [
      'We take the security of your personal data seriously. We implement appropriate technical and organisational measures to protect your information against unauthorised access, loss, destruction, or alteration.',
      'All data submitted through our website is transmitted over a secure encrypted connection (HTTPS). Access to personal data is restricted to those within our organisation who have a legitimate need to process it.',
      'While we take reasonable steps to protect your data, no method of transmission over the internet is completely secure. You submit information to us at your own risk.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Details',
    content: [
      'If you have any questions about this Privacy Policy or the way we handle your personal data, please contact us:',
      'Otago Doors\n[Your Address]\nUnited Kingdom\nEmail: hub3324@outlook.com\nPhone: 07724 311443',
    ],
  },
]

export default function PrivacyPage() {
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
            <Link href="/terms" className="text-white/50 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-[#f8cf40]">Privacy</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-[#f8cf40] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Legal</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Privacy Policy</h1>
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
            <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-[#f8cf40]/60 hover:text-[#f8cf40] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
