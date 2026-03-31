'use client';

import React from 'react';

import { LandingDemoVideo } from './landing/components/LandingDemoVideo';
import { LandingDivider } from './landing/components/LandingDivider';
import { LandingFinalCTA } from './landing/components/LandingFinalCTA';
import { LandingFloatingCTA } from './landing/components/LandingFloatingCTA';
import { LandingFooter } from './landing/components/LandingFooter';
import { LandingHero } from './landing/components/LandingHero';
import { LandingIndividuals } from './landing/components/LandingIndividuals';
import { LandingNav } from './landing/components/LandingNav';
import { LandingPricing } from './landing/components/LandingPricing';
import { LandingScience } from './landing/components/LandingScience';
import { LandingShell } from './landing/components/LandingShell';
import { LandingTestimonialHero } from './landing/components/LandingTestimonialHero';
import { LandingTestimonials } from './landing/components/LandingTestimonials';
import { LandingTherapists } from './landing/components/LandingTherapists';

export default function LandingPage(): React.JSX.Element {
  return (
    <LandingShell>
      <LandingNav />
      <LandingHero />
      <LandingTestimonialHero />
      <LandingDivider />
      <LandingIndividuals />
      <LandingDemoVideo />
      <LandingTherapists />
      <LandingTestimonials />
      <LandingScience />
      <LandingPricing />
      <LandingFinalCTA />
      <LandingFooter />
      <LandingFloatingCTA />
    </LandingShell>
  );
}
