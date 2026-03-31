import type { PricingCard } from '../types';

export const PRICING_CARDS: PricingCard[] = [
  {
    title: 'VERA Free Plan',
    price: '$0',
    period: '/Monthly',
    features: [
      'Full AI VERA access you can chat with',
      'Talk to VERA anytime. No credit card required.',
    ],
    cta: 'Start Free',
    href: '/sign-up',
    variant: 'outline',
  },
  {
    title: 'VERA Premium',
    price: '$12.99',
    period: '/Monthly',
    features: [
      'Clinical skills',
      'Practice tools',
      'Pattern insights',
      'Progress tracking',
    ],
    cta: 'Start Free Trial',
    href: '/upgrade',
    variant: 'primary',
    featured: true,
  },
];
