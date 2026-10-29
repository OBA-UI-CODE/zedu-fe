import type { Metadata } from "next";
import { FeatureSection } from "./_components/home/FeatureSection";
import HeroSection from "./_components/home/Herosection";
import { ArticlesSection } from "./_components/home/ArticlesSection";
import { PricingSection } from "./_components/home/PricingSection";
import { WhySection } from "./_components/home/WhySection";
import { FAQSection } from "./_components/home/FAQSection";
import { DynamicFooter } from "./_components/footer/dynamic-footer";
import { getHomeStructuredData } from "./_lib/homeStructuredData";
import { Web3LearningSection } from "./_components/home/Web3LearningSection";

export const metadata: Metadata = {
  title: {
    absolute: "Zedu - Learning Platform for Bootcamps, Schools, and Cohorts",
  },
  description:
    "Zedu is an AI-powered education platform for bootcamps, schools, cohorts, and Web3 learning communities. Organize classes, blockchain training, DAO onboarding, and collaboration in one workspace.",
  openGraph: {
    title: "Zedu - Learning Platform for Bootcamps, Schools, and Cohorts",
    description:
      "Built for modern learning: structured channels, AI-powered support, flexible education pricing, and tools that help educators run better cohorts.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const HomePage = () => {
  const structuredData = JSON.stringify(getHomeStructuredData()).replace(
    /</g,
    "\\u003c"
  );

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <HeroSection />
      <Web3LearningSection />
      <FeatureSection />
      <ArticlesSection />
      <PricingSection />
      <WhySection />
      <FAQSection />
      <DynamicFooter
        text="Run Your Next Cohort Without Limits"
        description="Join thousands of educators building better learning experiences."
      />
    </section>
  );
};

export default HomePage;
