import { CtaSection } from '@/components/landing/cta-section';
import { DynamicFormSection } from '@/components/landing/dynamic-form-section';
import { FeatureShowcaseSection } from '@/components/landing/feature-showcase-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { DiagnosticTool } from '@/components/landing/diagnostic-tool';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <FeatureShowcaseSection />
        <DynamicFormSection />
        <DiagnosticTool />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
