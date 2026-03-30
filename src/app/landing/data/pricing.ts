import type { PricingCard } from '../types';

export const PRICING_CARDS: PricingCard[] = [
  {
    title: 'Free',
    subtitle: 'Always Free to Start',
    description: 'Talk to VERA anytime. No credit card required.',
    cta: 'Start Free ->',
    href: '/sign-up',
    variant: 'outline',
  },
  {
    title: 'VERA Pro — $12.99/month',
    subtitle: 'All Features',
    description: 'Clinical skills, practice tools, pattern insights, progress tracking, and priority support',
    cta: 'Upgrade to Premium ->',
    href: '/upgrade',
    variant: 'primary',
    featured: true,
  },
];
