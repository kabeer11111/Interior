"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function MaterialsSection() {
  const materials = [
    { name: "Natural Stone", types: "Marble, Quartzite, Travertine, Limestone" },
    { name: "Matte Metals", types: "Brushed Brass, Bronze, Blackened Finishes" },
    { name: "Soft Textiles", types: "Linen, Wool Blends, Natural Cottons" },
  ]

  return (
    <section className="py-32 md:py-44 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/natural-travertine-stone-texture-close-up-warm-bei.jpg"
                    alt="Travertine stone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/brushed-brass-metal-texture-detail-warm-gold-tones.jpg"
                    alt="Brushed brass"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[4/6] overflow-hidden">
                  <img
                    src="/natural-linen-fabric-texture-soft-folds-warm-neutr.jpg"
                    alt="Natural linen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal delay={150}>
            <div className="space-y-10 lg:pl-8">
              <div className="space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-[family-name:var(--font-inter)]">
                  Material Language
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.02em] leading-tight text-balance">
                  Timeless, durable, honest
                </h2>
              </div>

              <p className="text-muted-foreground font-[family-name:var(--font-inter)] font-light leading-relaxed">
                Our material selections are guided by longevity and tactile quality—surfaces that age with grace,
                suitable for the Indian climate while maintaining a global design sensibility.
              </p>

              {/* Material List */}
              <div className="space-y-6 pt-4">
                {materials.map((material) => (
                  <div key={material.name} className="border-b border-border/50 pb-6">
                    <h3 className="text-lg font-light tracking-[0.02em] mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] font-light">
                      {material.types}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
