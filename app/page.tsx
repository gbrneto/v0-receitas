import { HeroSection } from "@/components/hero-section"
import { RecipesSection } from "@/components/recipes-section"
import { RecipeCardsSection } from "@/components/recipe-cards-section"
import { AboutSection } from "@/components/about-section"
import { CategoriesSection } from "@/components/categories-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecipesSection />
      <RecipeCardsSection />
      <AboutSection />
      <CategoriesSection />
    </main>
  )
}
