import { HeroSection } from "@/components/hero-section"
import { RecipesSection } from "@/components/recipes-section"
import { RecipeCardsSection } from "@/components/recipe-cards-section"
import { AboutSection } from "@/components/about-section"
import { CategoriesSection } from "@/components/categories-section"
import { BonusSection } from "@/components/bonus-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { TestimonialVideoSection } from "@/components/testimonial-video-section"
import { OfferSection } from "@/components/offer-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecipesSection />
      <RecipeCardsSection />
      <AboutSection />
      <CategoriesSection />
      <BonusSection />
      <TargetAudienceSection />
      <TestimonialVideoSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
