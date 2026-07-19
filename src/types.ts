export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  tagline: string;
  pageCount: number;
  readTime: string;
  takeaways: string[];
  sampleText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  tag: 'founder' | 'designer' | 'marketer';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  tagline: string;
  features: string[];
  popular: boolean;
  savings: string;
}
