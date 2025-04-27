export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  websiteUrl?: string;
  githubUrl: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "prepwise",
    name: "Prepwise - AI Interview Practice Platform",
    description: "Developed an AI-powered mock interview platform with real-time voice interactions. Implemented voice-based interviews using VAPI.ai for natural conversation flow. Integrated Google Gemini AI for dynamic question generation and feedback analysis.",
    image: "https://api.microlink.io/?url=https://ai-mock-interview-neon-iota.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    websiteUrl: "https://ai-mock-interview-neon-iota.vercel.app/",
    githubUrl: "https://github.com/Vinayak097/prepwise",
    technologies: ["Next.js 15", "TypeScript", "Firebase", "Google Gemini AI", "VAPI.ai", "TailwindCSS"],
    featured: true
  },
  {
    id: "ai-assistly",
    name: "AI Assistly",
    description: "Designed and developed AI bots for various content creation tasks. Integrated Gemini API to generate responses to user prompts. Implemented Clerk authentication and over 15 REST APIs for user interaction.",
    image: "https://placehold.co/600x400/blue/white?text=AI+Assistly",
    githubUrl: "https://github.com/Vinayak097/ai-content-generator-.git",
    technologies: ["Next.js", "Gemini API", "TailwindCSS", "PostgreSQL", "Clerk"],
    featured: true
  },
  {
    id: "real-time-chat",
    name: "Real-Time Chat Web App",
    description: "Developed a chat application with real-time messaging. Integrated Redis for efficient data storage and retrieval. Implemented real-time updates for seamless user experience.",
    image: "https://api.microlink.io/?url=https://redis-chat-neon.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    websiteUrl: "https://redis-chat-neon.vercel.app/",
    githubUrl: "https://github.com/Vinayak097/real-time-chat",
    technologies: ["Next.js", "Redis", "Upstash", "NextAuth"],
    featured: true
  },
  {
    id: "blog-site",
    name: "Blog Site",
    description: "A user-friendly interface allowing users to create blog posts. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
    image: "https://api.microlink.io/?url=https://blogging-app-seven-psi.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    websiteUrl: "https://blogging-app-seven-psi.vercel.app/",
    githubUrl: "https://github.com/Vinayak097/bloging_app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
    featured: false
  }
];
