import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export const profile = {
  name: "Rida Kanwal",
  title: "Creative Technologist",
  contact: {
    phone: "0308 6155055",
    email: "ridakanwalone8@gmail.com",
    address: "Dost Street, St#4 Samundari Road, Faisalabad, Pakistan",
    location: "Faisalabad, Pakistan",
  },
  summary:
    "I am a creative and technology-driven individual specializing in AI-powered design, digital systems, and modern workflow optimization. I combine strong analytical thinking with advanced creative tools to design smarter, faster, and more impactful solutions. From visual design and branding to AI automation, Web3, and market-focused strategy, I thrive on turning complex ideas into clean, effective results. With a passion for innovation and continuous learning, I aim to create work that is not only visually compelling but also efficient, scalable, and aligned with future technologies.",
  socials: {
    linkedin: "https://linkedin.com/in/rida-kanwal", // Placeholder as not provided
    github: "https://github.com/rida-kanwal", // Placeholder
  }
};

export const skills = [
  "AI Prompt Engineering",
  "AI Reverse Engineering",
  "Generative AI",
  "Blockchain",
  "Crypto",
  "Web3 Wallet",
  "Branding",
  "Advertising",
  "SEO",
  "Illustration",
  "Graphic Design",
  "Project Management",
  "Critical Thinking",
  "Leadership",
  "Market Research",
  "Digital Marketing",
  "Productivity",
];

export const experience = [
  {
    role: "Senior Finance Advisor",
    company: "Adamjee Life",
    period: "2020–2022",
    description: [
      "Provided organized financial guidance that equipped clients with effective planning solutions, enhancing their satisfaction and fostering long-term loyalty.",
    ],
  },
  {
    role: "Customer Relations Specialist",
    company: "One Solution",
    period: "2023–2024",
    description: [
      "Ensured seamless operations by maintaining precise records through effective organizational skills and meticulous data management.",
    ],
  },
  {
    role: "Sr Supervisor Printshop",
    company: "Interloop Ltd",
    period: "2024–Present",
    description: [
      "Provided precise and high-volume data processing along with record management, while creating export-compliant packaging labels. This was achieved through a combination of analytical and visual accuracy, guaranteeing dependable performance and operational assistance.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Statistics",
    institution: "GC University Faisalabad",
    period: "2017–2019",
    gpa: "3.1",
  },
];

export const languages = ["English", "Urdu", "Hindi"];

export const software = [
  { name: "Adobe Photoshop", icon: "path/to/icon" },
  { name: "Adobe Illustrator", icon: "path/to/icon" },
  { name: "Canva", icon: "path/to/icon" },
  { name: "Notion", icon: "path/to/icon" },
  { name: "Microsoft Word", icon: "path/to/icon" },
  { name: "Microsoft Excel", icon: "path/to/icon" },
  { name: "Microsoft PowerPoint", icon: "path/to/icon" },
  { name: "Microsoft Outlook", icon: "path/to/icon" },
  { name: "Google Docs", icon: "path/to/icon" },
];

export const tools = [
  { category: "AI / GenAI", name: "ChatGPT (OpenAI)" },
  { category: "AI / GenAI", name: "Google Gemini" },
  { category: "AI / GenAI", name: "Midjourney" },
  { category: "AI / GenAI", name: "Stable Diffusion" },
  { category: "AI / GenAI", name: "Leonardo AI" },
  { category: "AI / GenAI", name: "Hugging Face" },
  { category: "AI / GenAI", name: "Perplexity" },
  { category: "AI / GenAI", name: "ElevenLabs" },
  { category: "Creative / Build", name: "Framer" },
  { category: "Creative / Build", name: "Runway" },
  { category: "Web3", name: "MetaMask" },
  { category: "Dev/Deploy", name: "Vercel" },
  { category: "Media/Utility", name: "Descript" },
];

export const services = [
  {
    slug: "ai-powered-design",
    title: "AI-Powered Design",
    summary: "Leveraging generosity AI to create stunning visuals and automated design workflows.",
    bullets: ["Prompt Engineering", "Image Generation", "Design Automation"],
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    summary: "Building coherent, premium brand identities that resonate with modern audiences.",
    bullets: ["Logo Design", "Brand Guidelines", "Visual Strategy"],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    summary: "Optimizing business processes with smart digital tools and AI integrations.",
    bullets: ["Notion Systems", "Zapier/Make", "Process Optimization"],
  },
  {
    slug: "web3-digital-systems",
    title: "Web3 & Digital Systems",
    summary: "Navigating the decentralized web with wallet setup, security, and integration.",
    bullets: ["Wallet Management", "Blockchain Basics", "Digital Assets"],
  },
];

export const projects = [
  {
    slug: "ai-design-system",
    title: "AI Design System",
    tags: ["AI", "Design", "Automation"],
    excerpt: "A comprehensive design system generated and maintained using AI tools.",
    sections: {
      overview: "Developed a scalable design system using AI tools to speed up asset creation.",
      problem: "Traditional design workflows were too slow for the rapid iteration required.",
      approach: "Used Midjourney and Stable Diffusion for asset generation, refining in Photoshop.",
      deliverables: "Icon set, Color palette, UI components.",
      outcome: "Reduced design time by 40%. (Sample outcome)",
      tools: ["Midjourney", "Figma", "Photoshop"],
    },
  },
  {
    slug: "brand-identity-kit",
    title: "Brand Identity Kit",
    tags: ["Branding", "Design"],
    excerpt: "Complete brand overhaul for a digital-first startup.",
    sections: {
      overview: "Created a new visual identity for a tech client.",
      problem: "The old brand felt outdated and didn't communicate innovation.",
      approach: "Conducted market research and developed a clean, modern aesthetic.",
      deliverables: "Logo, Brand Book, Social Media Assets.",
      outcome: "Client reported 20% increase in engagement. (Sample outcome)",
      tools: ["Illustrator", "Canva"],
    },
  },
  {
    slug: "web3-wallet-ui",
    title: "Web3 Wallet UI",
    tags: ["Web3", "UI/UX"],
    excerpt: "User interface design for a non-custodial crypto wallet.",
    sections: {
      overview: "Designed the onboarding and transaction flows for a new wallet.",
      problem: "Crypto wallets are often confusing for new users.",
      approach: "Focused on clarity, safety, and ease of use in the interface.",
      deliverables: "Figma Prototypes, UI Assets.",
      outcome: "User testing showed 90% success rate in first transaction. (Sample outcome)",
      tools: ["Figma", "MetaMask"],
    },
  },
  {
    slug: "seo-growth-dashboard",
    title: "SEO Growth Dashboard",
    tags: ["SEO", "Analytics"],
    excerpt: "A custom dashboard to track and improve search engine rankings.",
    sections: {
      overview: "Built a reporting tool to visualize SEO metrics.",
      problem: "Client data was scattered across multiple tools.",
      approach: "Aggregated data from GSC and Analytics into a single view.",
      deliverables: "Dashboard UI, Report Templates.",
      outcome: "Improved reporting efficiency. (Sample outcome)",
      tools: ["Excel", "Google Sheets"],
    },
  },
  {
    slug: "automation-workflow-suite",
    title: "Automation Workflow Suite",
    tags: ["Automation", "Productivity"],
    excerpt: "Automated client onboarding and data processing workflows.",
    sections: {
      overview: "Streamlined internal processes using no-code tools.",
      problem: "Manual data entry was causing errors and delays.",
      approach: "Mapped processes and implemented automation triggers.",
      deliverables: "Automated Pipelines, Documentation.",
      outcome: "Eliminated 10 hours of manual work per week. (Sample outcome)",
      tools: ["Notion", "Zapier"],
    },
  },
  {
    slug: "generative-ai-campaign",
    title: "Generative AI Campaign",
    tags: ["AI", "Marketing"],
    excerpt: "A social media campaign powered entirely by generative content.",
    sections: {
      overview: "Launched a viral campaign using AI-generated imagery.",
      problem: "Needed high-volume visual content on a tight budget.",
      approach: "Used prompt engineering to create consistent brand visuals.",
      deliverables: "Social Posts, Ad Creatives.",
      outcome: "Reached 100k+ impressions. (Sample outcome)",
      tools: ["Midjourney", "ChatGPT"],
    },
  },
];

export const blogPosts = [
  {
    slug: "ai-prompting-for-designers",
    title: "AI Prompting for Designers",
    date: "2024-03-15",
    excerpt: "How to write effective prompts to get the best visual results.",
    content: "In the era of Generative AI, the ability to communicate widely with algorithms is a superpower. For designers, this means mastering the art of prompt engineering. By understanding how models like Midjourney and Stable Diffusion interpret text, we can create stunning visuals that align with our creative vision. \n\n Key Takeaways: \n 1. Be specific with style descriptors. \n 2. Use negative prompts to remove unwanted elements. \n 3. Iterate and refine."
  },
  {
    slug: "branding-systems-that-scale",
    title: "Branding Systems That Scale",
    date: "2024-03-10",
    excerpt: "Building identities that work across all platforms and sizes.",
    content: "A logo is not a brand. A brand is a system. When designing for the modern web, we need to think about how our visual language adapts to different contexts. From mobile screens to billboards, consistency is key, but flexibility is essential."
  },
  {
    slug: "web3-ux-lessons",
    title: "Web3 UX Lessons",
    date: "2024-03-05",
    excerpt: "What we can learn from the user experience challenges of decentralized apps.",
    content: "Web3 introduced a paradigm shift in how users interact with the internet. However, it also introduced significant friction. Wallet connections, gas fees, and transaction confirmations are hurdles that good UX must overcome."
  },
  {
    slug: "seo-that-feels-like-product",
    title: "SEO That Feels Like Product",
    date: "2024-02-28",
    excerpt: "Integrating search optimization into the product design process.",
    content: "SEO shouldn't be an afterthought. It should be baked into the product structure. By designing with search intent in mind, we can create pages that not only rank well but also serve the user's needs effectively."
  },
  {
    slug: "automation-with-human-taste",
    title: "Automation With Human Taste",
    date: "2024-02-20",
    excerpt: "Balancing efficiency with the personal touch in automated workflows.",
    content: "Automation is powerful, but it can feel robotic. The secret to great automation is knowing when to bring the human back into the loop. It's about augmenting human capability, not replacing it entirely."
  },
  {
    slug: "creativity-meets-statistics",
    title: "Creativity Meets Statistics",
    date: "2024-02-15",
    excerpt: "How data analysis can inform and improve creative decisions.",
    content: "As someone with a background in Statistics, I've found that data is the best friend of creativity. Analyzing trends, user behavior, and performance metrics helps refine creative intuition and leads to better design outcomes."
  },
];
