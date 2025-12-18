"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function WorkSection() {
  const projects = [
    {
      title: "Private Residence",
      location: "Mumbai",
      image: "/minimalist-luxury-bedroom-with-natural-stone-walls.jpg",
    },
    {
      title: "Heritage Apartment",
      location: "Delhi",
      image: "/elegant-minimalist-living-room-natural-materials-w.jpg",
    },
    {
      title: "Weekend Retreat",
      location: "Alibaug",
      image: "/serene-minimalist-dining-space-natural-wood-table-.jpg",
    },
  ]

  return (
    <section id="work" className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-[family-name:var(--font-inter)]">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.02em]">Spaces we've shaped</h2>
            </div>
            <p className="max-w-md text-muted-foreground font-[family-name:var(--font-inter)] font-light text-sm md:text-base">
              A selection of residential projects where material intelligence meets considered design.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="group cursor-pointer">
                <div className="space-y-6">
                  {/* Image */}
                  <div className="aspect-[6/7] overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-light tracking-[0.02em] group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] font-light">
                      {project.location}
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
