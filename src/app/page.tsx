import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
  <div className="container py-20 md:py-32">
    <div className="flex flex-col items-center gap-8">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-8 w-1/2" />
      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  </div>
);

const FeaturesSection = dynamic(
  () =>
    import('@/components/landing/features-section').then(
      (mod) => mod.FeaturesSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const HowItWorksSection = dynamic(
  () =>
    import('@/components/landing/how-it-works-section').then(
      (mod) => mod.HowItWorksSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const ProspectingSection = dynamic(
  () =>
    import('@/components/landing/prospecting-section').then(
      (mod) => mod.ProspectingSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const BenefitsSection = dynamic(
  () =>
    import('@/components/landing/benefits-section').then(
      (mod) => mod.BenefitsSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const TestimonialsSection = dynamic(
  () =>
    import('@/components/landing/testimonials-section').then(
      (mod) => mod.TestimonialsSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const PricingSection = dynamic(
  () =>
    import('@/components/landing/pricing-section').then(
      (mod) => mod.PricingSection
    ),
  { loading: () => <LoadingSkeleton /> }
);
const FaqSection = dynamic(
  () =>
    import('@/components/landing/faq-section').then((mod) => mod.FaqSection),
  { loading: () => <LoadingSkeleton /> }
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProspectingSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
