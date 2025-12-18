import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProcessSection } from "@/components/process-section"
import { WorkSection } from "@/components/work-section"
import { MaterialsSection } from "@/components/materials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ProcessSection />
      <WorkSection />
      <MaterialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
