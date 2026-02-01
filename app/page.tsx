import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import FeatureSections from './components/FeatureSections';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Pricing Section */}
        <PricingSection />

        {/* Feature Comparison Tables */}
        <FeatureSections />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
