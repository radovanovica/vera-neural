export interface HighlightCard {
  color: string;
  icon: string;
  title: string;
  desc: string;
  response: string;
}

export interface StepItem {
  step: string;
  stepImg: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  role: string;
  timeAgo: string;
  rating: number;
  green?: boolean;
  platform?: 'facebook' | 'instagram' | 'youtube';
}

export interface ScienceCard {
  title: string;
  desc: string;
  icon: string;
  image?: string;
}

export interface PricingCard {
  title: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  variant: 'outline' | 'primary';
  featured?: boolean;
}
