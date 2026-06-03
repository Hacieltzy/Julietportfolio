export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // The Lucide icon component name to render
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number; // 1-5
  feedback: string;
  avatarUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 for visual indicator
  category: "core" | "soft" | "technical";
}

export interface Tool {
  name: string;
  category: string;
  iconName?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
