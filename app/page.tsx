import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { SpotlightLogoCloud } from "@/components/logos-cloud";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsletterSignup />
      <Features />
      <SpotlightLogoCloud />
      <Pricing />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}
