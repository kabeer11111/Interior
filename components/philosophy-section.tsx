"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <ScrollReveal>
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-[family-name:var(--font-inter)]">
                  Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.02em] leading-tight text-balance">
                  Luxury expressed through restraint
                </h2>
              </div>

              <div className="w-12 h-px bg-foreground/20"></div>

              <div className="space-y-6 text-muted-foreground font-[family-name:var(--font-inter)] font-light leading-relaxed">
                <p>
                  At NKS, we believe luxury is quiet, restrained, and intentional. It is not found in excess, but in the
                  careful selection of materials, the precision of proportions, and the quality of light that fills a
                  room.
                </p>
                <p>
                  True luxury is felt in how a space functions and ages over time—not in fleeting trends or decorative
                  excess.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/elegant-interior-design-detail-natural-travertine-.jpg"
                  alt="Material detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border/50 -z-10"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
