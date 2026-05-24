export interface Project {
  id: string;
  name: string;
  category: 'commercial' | 'residential' | 'interiors' | 'renovation';
  client: string;
  location: string;
  scope: string;
  timeline: string;
  value: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
  keyFeatures: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  capabilities: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
  subCategories: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export type ActivePage = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'commercial-construction' 
  | 'residential-construction' 
  | 'interior-design' 
  | 'portfolio' 
  | 'process' 
  | 'faq' 
  | 'contact';
