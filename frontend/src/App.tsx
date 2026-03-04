import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { HowItWorks } from "./components/HowItWorks";
import { ProductPreview } from "./components/ProductPreview";
import { FeaturesBento } from "./components/FeaturesBento";
import { PricingSection } from "./components/PricingSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WaitlistProvider } from "./contexts/WaitlistContext";

export default function App() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <div className="py-8">
            <StatsStrip />
          </div>
          <div className="py-12">
            <HowItWorks />
          </div>
          <div className="py-4">
            <ProductPreview />
          </div>
          <div className="py-12">
            <FeaturesBento />
          </div>
          <div className="py-12">
            <PricingSection />
          </div>
          <div className="py-12">
            <FinalCTA />
          </div>
        </main>
        <Footer />
      </div>
    </WaitlistProvider>
  );
}