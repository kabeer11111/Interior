"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="text-2xl md:text-3xl font-light tracking-[0.2em] text-foreground">NKS</span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <NavLink href="#philosophy">Philosophy</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <button
              className="md:hidden text-foreground relative z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={cn(
                    "w-full h-px bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen && "rotate-45 translate-y-[4px]",
                  )}
                />
                <span
                  className={cn(
                    "w-4 h-px bg-foreground ml-auto transition-all duration-300",
                    isMobileMenuOpen && "w-full -rotate-45 -translate-y-[3px]",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <MobileNavLink href="#philosophy" onClick={handleNavClick}>
            Philosophy
          </MobileNavLink>
          <MobileNavLink href="#process" onClick={handleNavClick}>
            Process
          </MobileNavLink>
          <MobileNavLink href="#work" onClick={handleNavClick}>
            Work
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={handleNavClick}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-[family-name:var(--font-inter)] font-light"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-300 font-light"
    >
      {children}
    </Link>
  )
}
