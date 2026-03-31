import type { PricingCard } from '../types';

export const PRICING_CARDS: PricingCard[] = [
  {
    title: 'VERA Free Plan',
    price: '$0',
    period: 'Monthly',
    features: [
      'Talk to VERA anytime you need support.',
      'No credit card required.',
    ],
    cta: 'Start Free',
    href: '/sign-up',
    variant: 'outline',
  },
  {
    title: 'VERA Premium',
    price: '$12.99',
    period: 'Monthly',
    features: [
      'Clinical skills',
      'Practice tools',
      'Pattern insights',
      'Progress tracking',
      'Priority support',
    ],
    cta: 'Upgrade To Premium',
    href: '/upgrade',
    variant: 'primary',
    featured: true,
  },
];
