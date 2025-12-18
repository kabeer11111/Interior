import type React from "react"
export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-3">
            <span className="text-2xl font-light tracking-[0.2em] text-foreground">NKS</span>
            <p className="text-xs tracking-[0.1em] text-muted-foreground font-[family-name:var(--font-inter)] font-light">
              Niyashi Kaushik Spaces
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <FooterLink href="#philosophy">Philosophy</FooterLink>
            <FooterLink href="#process">Process</FooterLink>
            <FooterLink href="#work">Work</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-[family-name:var(--font-inter)] font-light">
            © {new Date().getFullYear()} NKS
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-[family-name:var(--font-inter)] font-light"
    >
      {children}
    </a>
  )
}
