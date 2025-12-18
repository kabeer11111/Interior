"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-[family-name:var(--font-inter)]">
                Begin a Conversation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.02em] text-balance">
                Let's discuss your project
              </h2>
            </div>

            <div className="w-12 h-px bg-foreground/20 mx-auto"></div>

            <p className="text-muted-foreground font-[family-name:var(--font-inter)] font-light leading-relaxed max-w-lg mx-auto">
              We take on a limited number of projects each year to ensure the attention and care your home deserves.
            </p>

            {/* Contact Link */}
            <div className="pt-6">
              <a
                href="mailto:work.niyashi@gmail.com"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 group"
              >
                <span className="text-lg md:text-xl font-light tracking-[0.05em]">work.niyashi@gmail.com</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
