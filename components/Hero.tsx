export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] flex items-center overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C49A27] to-transparent opacity-70" />

      {/* Large faded background word */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <span
          className="font-heading font-bold text-[20vw] text-white/[0.025] leading-none tracking-tighter"
          aria-hidden="true"
        >
          DOORS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-px bg-[#C49A27]" />
            <span className="text-[#C49A27] text-xs font-semibold tracking-[0.25em] uppercase font-body">
              UK Door Installation
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-[2.8rem] md:text-6xl lg:text-7xl text-white leading-[1.06] tracking-tight mb-6">
            The UK&apos;s<br />
            All-In-One<br />
            <span className="text-[#C49A27]">Door Installation</span><br />
            Service.
          </h1>

          {/* Motto */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-px h-8 bg-[#C49A27]/60" />
            <p className="text-white/50 text-lg md:text-xl italic font-light font-body">
              &ldquo;Doors aren&apos;t just doors.&rdquo;
            </p>
          </div>

          {/* Subtext */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-body">
            We turn up, measure, present your options, and fit the door. Transparent pricing, professional installation, zero hassle from first contact to final fit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-[#C49A27] hover:bg-[#D4AF37] text-black font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Enquire Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  )
}
