import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  target: string;
  hardwareCost: string;
  annualCost: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}