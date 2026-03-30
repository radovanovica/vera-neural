export interface HighlightCard {
  color: string;
  title: string;
  desc: string;
  response: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  green?: boolean;
}

export interface ScienceCard {
  title: string;
  desc: string;
}

export interface PricingCard {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  variant: 'outline' | 'primary';
  featured?: boolean;
}
