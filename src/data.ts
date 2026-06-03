import { Service, Experience, Metric, Testimonial, Skill, Tool } from "./types";

export const PORTFOLIO_NAME = "Julient Chinye";
export const PORTFOLIO_TITLE = "Professional Virtual Assistant & Administrative Support Specialist";
export const PORTFOLIO_SUBTITLE = "Helping entrepreneurs, executives, and growing businesses streamline operations, improve productivity, and focus on what matters most.";

// Use the generated professional profile photo
export const PROFILE_IMAGE = "/src/assets/images/julient_profile_1780471059324.png";

export const METRICS: Metric[] = [
  {
    id: "experience",
    value: 4,
    suffix: "+",
    label: "Years of Experience",
    description: "In administrative operations & virtual support"
  },
  {
    id: "projects",
    value: 85,
    suffix: "+",
    label: "Projects Completed",
    description: "Across educational, corporate, and NGO initiatives"
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Proven track record of reliability and speed"
  }
];

export const ABOUT_ME_TEXT = `Detail-oriented Virtual Assistant with a legal academic background and a strong command of research, communication, and structured operations support. I specialize in providing high-level administrative assistance that enhances efficiency, improves workflow coordination, and enables professionals to operate at peak productivity.

I bring a disciplined, analytical approach to task management, with proven adaptability in fast-paced digital environments. My strengths lie in organization, attention to detail, and the ability to execute responsibilities with accuracy, discretion, and consistency.

I am committed to delivering reliable operational support that allows executives and teams to focus on strategic priorities while I ensure seamless execution of day-to-day functions.`;

export const SERVICES: Service[] = [
  {
    id: "email",
    title: "Email Management",
    description: "Decluttering, organizing, labeling, prioritizing correspondence, and drafting polished replies to ensure seamless communications.",
    iconName: "Mail"
  },
  {
    id: "calendar",
    title: "Calendar Management & Scheduling",
    description: "Managing daily schedules, arranging meetings across time zones, booking agendas, and sending timely reminders to maximize daily availability.",
    iconName: "Calendar"
  },
  {
    id: "admin",
    title: "Administrative Support",
    description: "Handling daily operations, managing standard procedures, documentation, and virtual office set up to free up executive time.",
    iconName: "Briefcase"
  },
  {
    id: "customer",
    title: "Customer Support",
    description: "Providing empathetic, timely, and solutions-oriented support via live chat, email, and messaging platforms to keep clients satisfied.",
    iconName: "Headphones"
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    description: "Prospecting candidates, scraping targeted market sectors, and creating verified lead databases to accelerate outbound campaigns.",
    iconName: "Target"
  },
  {
    id: "cold-calling",
    title: "Cold Calling",
    description: "Conducting professional outreach campaigns, identifying decision makers, and introducing product value propositions over the phone.",
    iconName: "PhoneCall"
  },
  {
    id: "appointment",
    title: "Appointment Setting",
    description: "Proactively reaching out to qualified prospects and securing high-conversion, structured slots on your executive sales calendar.",
    iconName: "CalendarCheck"
  },
  {
    id: "research",
    title: "Internet Research",
    description: "Deep research, comparative analysis, factual verification, and preparing synthesized briefings to aid strategic decisions.",
    iconName: "Search"
  },
  {
    id: "data-entry",
    title: "Data Entry",
    description: "Entering, cleaning, deduplicating, and archiving information into spreadsheets or custom databases with perfect accuracy.",
    iconName: "Database"
  },
  {
    id: "social-media",
    title: "Social Media Assistance",
    description: "Creating engaging graphics, updating feeds, curating content, and managing general audience comments to maintain top visibility.",
    iconName: "Share2"
  },
  {
    id: "client-comm",
    title: "Client Communication",
    description: "Serving as a dedicated and responsive virtual point of contact, drafting informative updates, newsletters, and general announcements.",
    iconName: "MessageSquare"
  },
  {
    id: "travel",
    title: "Travel & Meeting Coordination",
    description: "Booking flights, accommodations, managing transportation logistics, and compiling cohesive itineraries for corporate travels.",
    iconName: "Compass"
  },
  {
    id: "document",
    title: "Document Preparation",
    description: "Formatting contracts, checking briefs, constructing visually appealing Google Slides presentations, and polishing internal structures.",
    iconName: "FileText"
  },
  {
    id: "file-org",
    title: "File Organization",
    description: "Modernizing cloud filing cabinets (Google Drive, Notion) with clean directory configurations, permission matrixes, and strict naming keys.",
    iconName: "FolderOpen"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "heartleap",
    company: "Heartleap Educational Results",
    role: "Virtual Assistant & Social Media Manager (Remote)",
    period: "Apr 2024 - Present",
    location: "Remote",
    bullets: [
      "Supported administrative operations and managed daily communications.",
      "Grew and managed social media presence through content creation and engagement strategies.",
      "Assisted in lead generation and audience outreach to improve visibility and conversions."
    ]
  },
  {
    id: "midastouch",
    company: "MidasTouch Initiative",
    role: "Virtual Assistant & Digital Engagement Coordinator (Remote)",
    period: "Jan 2023 - Mar 2024",
    location: "Remote",
    bullets: [
      "Provided virtual administrative and coordination support for online programs and activities.",
      "Managed social media pages, improving engagement through structured content planning.",
      "Supported outreach efforts to increase participation in empowerment initiatives."
    ]
  },
  {
    id: "beauty4ashes",
    company: "Beauty4Ashes Initiative",
    role: "Virtual Assistant & Communications Support (Remote | NGO)",
    period: "Jun 2022 - Dec 2022",
    location: "Remote | NGO",
    bullets: [
      "Handled digital communications and maintained active stakeholder engagement.",
      "Created and scheduled awareness-focused social media content.",
      "Supported virtual events and outreach campaigns to strengthen community impact."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Communication", level: 98, category: "soft" },
  { name: "Time Management", level: 96, category: "core" },
  { name: "Organization", level: 100, category: "core" },
  { name: "Attention to Detail", level: 100, category: "core" },
  { name: "Customer Service", level: 94, category: "soft" },
  { name: "Research", level: 95, category: "technical" },
  { name: "Leadership", level: 90, category: "soft" },
  { name: "Problem Solving", level: 92, category: "technical" },
  { name: "Adaptability", level: 95, category: "soft" },
  { name: "Professionalism", level: 100, category: "core" }
];

export const TOOLS: Tool[] = [
  { name: "Google Workspace", category: "Productivity", iconName: "Layers" },
  { name: "Microsoft Office", category: "Documentation", iconName: "FileSpreadsheet" },
  { name: "Zoom", category: "Meetings", iconName: "Video" },
  { name: "Canva", category: "Design", iconName: "Palette" },
  { name: "Google Calendar", category: "Scheduling", iconName: "Calendar" },
  { name: "Gmail", category: "Inbox Management", iconName: "Mail" },
  { name: "WhatsApp Business", category: "Client Chat", iconName: "MessageCircle" },
  { name: "Notion", category: "Knowledge Base", iconName: "FileText" },
  { name: "Slack", category: "Collaboration", iconName: "Slack" },
  { name: "GoHighLevel", category: "CRM & Automation", iconName: "Cpu" }
];

export const WHY_HIRE_ME = [
  {
    title: "Reliable Administrative Support",
    description: "Consistently delivering high-level support ensuring that deadlines are met with structural accuracy, discretion, and perfection."
  },
  {
    title: "Excellent Communication",
    description: "Strong written and verbal ability stemming from my intensive legal academic education, facilitating clear outreach and client rapport."
  },
  {
    title: "Detail-Oriented Execution",
    description: "Meticulous verification habits ensure zero typos, structured spreadsheets, polished slideshows, and flawlessly managed inbox queues."
  },
  {
    title: "Efficient Workflow Management",
    description: "Highly skilled in establishing smart automation, modern cloud storage filing structures, and synchronized workspace tooling."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Amanda Ross",
    role: "Executive Director",
    company: "Heartleap Educational Results",
    rating: 5,
    feedback: "Julient was a monumental asset for our team. Her legal background gives her research skills an extraordinary edge and her administrative organizational talent is truly world class. Highly recommended!",
    avatarUrl: "https://picsum.photos/seed/amanda/100/100"
  },
  {
    id: "t2",
    name: "Kenneth Cole",
    role: "Lead Facilitator",
    company: "MidasTouch Initiative",
    rating: 5,
    feedback: "Julient is lightning fast, reliable, and operates with absolute integrity. She structured our social media calendar, handled double-bookings effortlessly, and completely revamped our digital community outreach.",
    avatarUrl: "https://picsum.photos/seed/kenneth/100/100"
  },
  {
    id: "t3",
    name: "Elaine Vance",
    role: "President",
    company: "Beauty4Ashes Initiative",
    rating: 5,
    feedback: "We run a fast-paced NGO, and Julient stepped in with incredible poise. She's extremely articulate, detail-oriented, and structured our communications. She made virtual coordination look completely effortless.",
    avatarUrl: "https://picsum.photos/seed/elaine/100/100"
  }
];

export const CONTACT_INFO = {
  email: "julientchinye@gmail.com", // Realistic professional placeholder based on name
  whatsapp: "+2348123456789", // Realistic professional placeholder
  linkedin: "https://linkedin.com/in/julient-chinye",
  facebook: "https://facebook.com/julient.chinye.va"
};
