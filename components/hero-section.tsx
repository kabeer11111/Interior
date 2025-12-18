export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/photo-1595236629937-aadaf7c1d99d.jpeg"
          alt="Natural stone texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.05em] text-foreground leading-tight text-balance">
            <span className="block">Spaces designed</span>
            <span className="block mt-2 md:mt-4">for how you live</span>
          </h1>

          <div className="w-16 h-px bg-foreground/30 mx-auto"></div>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-[family-name:var(--font-inter)]">
            Boutique interior design rooted in process clarity, material intelligence, and long-term value.
          </p>
        </div>
      </div>
    </section>
  )
}
