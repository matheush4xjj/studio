'use client';

import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import dynamic from 'next/dynamic';
import {
  BenefitsSkeleton,
  FaqSkeleton,
  FeaturesSkeleton,
  HowItWorksSkeleton,
  PricingSkeleton,
  ProspectingSkeleton,
  TestimonialsSkeleton,
} from '@/components/landing/skeletons';

const FeaturesSection = dynamic(
  () =>
    import('@/components/landing/features-section').then(
      (mod) => mod.FeaturesSection
    ),
  { loading: () => <FeaturesSkeleton /> }
);
const HowItWorksSection = dynamic(
  () =>
    import('@/components/landing/how-it-works-section').then(
      (mod) => mod.HowItWorksSection
    ),
  { loading: () => <HowItWorksSkeleton /> }
);
const ProspectingSection = dynamic(
  () =>
    import('@/components/landing/prospecting-section').then(
      (mod) => mod.ProspectingSection
    ),
  { loading: () => <ProspectingSkeleton /> }
);
const BenefitsSection = dynamic(
  () =>
    import('@/components/landing/benefits-section').then(
      (mod) => mod.BenefitsSection
    ),
  { loading: () => <BenefitsSkeleton /> }
);
const TestimonialsSection = dynamic(
  () =>
    import('@/components/landing/testimonials-section').then(
      (mod) => mod.TestimonialsSection
    ),
  { loading: () => <TestimonialsSkeleton /> }
);
const PricingSection = dynamic(
  () =>
    import('@/components/landing/pricing-section').then(
      (mod) => mod.PricingSection
    ),
  { loading: () => <PricingSkeleton /> }
);
const FaqSection = dynamic(
  () =>
    import('@/components/landing/faq-section').then((mod) => mod.FaqSection),
  { loading: () => <FaqSkeleton /> }
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
