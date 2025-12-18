"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Alignment",
      description: "Understanding your vision, lifestyle, and the essence of how you want to live within your space.",
    },
    {
      number: "02",
      title: "Planning & Design Direction",
      description: "Developing spatial strategies and aesthetic frameworks that honour both function and feeling.",
    },
    {
      number: "03",
      title: "Curated Selections",
      description:
        "Thoughtful material and furnishing choices—each selected for longevity, quality, and timeless appeal.",
    },
    {
      number: "04",
      title: "Execution & Styling",
      description: "Meticulous implementation and final styling that brings the complete vision to life.",
    },
  ]

  return (
    <section id="process" className="py-32 md:py-44 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20 md:mb-28">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-[family-name:var(--font-inter)]">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.02em] text-balance">
              A structured approach to
              <br className="hidden md:block" /> enduring design
            </h2>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 100}>
              <div className="group">
                <div className="space-y-6">
                  {/* Number */}
                  <span className="text-5xl md:text-6xl font-light text-border">{step.number}</span>

                  {/* Divider */}
                  <div className="w-8 h-px bg-foreground/20 group-hover:w-12 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-light tracking-[0.02em]">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
