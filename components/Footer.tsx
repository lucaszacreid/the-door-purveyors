const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Enquire Now', href: '#enquire' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-white/5">
          {/* Brand */}
          <div>
            <h2 className="font-heading font-bold text-white text-xl mb-3">The Door Purveyors</h2>
            <p className="text-[#C49A27] text-sm italic mb-6 font-body">&ldquo;Doors aren&apos;t just doors.&rdquo;</p>
            <p className="text-white/35 text-sm leading-relaxed font-body">
              Doors and windows, supplied and fitted across the UK. Straight pricing, guaranteed work, no fuss.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 font-body">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/40 hover:text-white text-sm transition-colors duration-200 font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 font-body">
              Contact
            </h3>
            <div className="space-y-3 text-white/40 text-sm font-body">
              <p>contact@thedoorpurveyors.co.uk</p>
              <p>+44 7919 965366</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body">
            © {new Date().getFullYear()} The Door Purveyors. All rights reserved.
          </p>
          <a
            href="/admin"
            className="text-white/10 hover:text-white/30 text-xs transition-colors duration-200 font-body"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  )
}
