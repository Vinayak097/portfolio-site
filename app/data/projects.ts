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
    id: "blog-site",
    name: "Blog Site",
    description: "A user-friendly interface allowing users to create blog posts. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
    image: "https://res.cloudinary.com/dtxmdxizu/image/upload/fl_preserve_transparency/v1718342130/blogsnipe_gaq8kj.jpg?_s=public-apps",
    websiteUrl: "https://blogging-app-seven-psi.vercel.app/",
    githubUrl: "https://github.com/Vinayak097/bloging_app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
    featured: true
  },
  {
    id: "todo-app",
    name: "Todo App",
    description: "Designed and developed a pastel theme to-do app with CRUD functionality with React, Express.js and MongoDB. Implemented pagination and categories for better user experience. Utilized bootstrap components to create visually appealing and accessible UI components.",
    image: "https://res.cloudinary.com/dtxmdxizu/image/upload/v1718342429/todosnip_zmtsjy.png",
    websiteUrl: "https://frontendtodo-tau.vercel.app/",
    githubUrl: "https://github.com/Vinayak097/frontendtodo.git",
    technologies: ["React", "Express.js", "MongoDB", "Bootstrap"],
    featured: true
  },
  {
    id: "paytm",
    name: "PayTM Clone",
    description: "Designed and developed a payment website to send and receive dummy money codes with React, Express.js and MongoDB. Implemented a secure end-to-end payment system by leveraging MongoDB's database transactions. Utilized Bcrypt encryption to hash and salt user credentials, for securing sensitive user credentials.",
    image: "https://res.cloudinary.com/dtxmdxizu/image/upload/v1718342492/paytmsnip_rgn8xs.png",
    githubUrl: "https://github.com/Vinayak097/paytmsmproject.git",
    technologies: ["React", "Express.js", "MongoDB", "Bcrypt"],
    featured: false
  },
  {
    id: "assistly",
    name: "Assistly",
    description: "An AI-powered content generation tool that helps users create various types of content efficiently. Built with React and integrated with OpenAI API.",
    image: "https://res.cloudinary.com/dtxmdxizu/image/upload/v1721209707/Screenshot_36_d3mcjb.png",
    githubUrl: "https://github.com/Vinayak097/ai-content-generator-.git",
    technologies: ["React", "AI", "OpenAI API", "TailwindCSS"],
    featured: true
  }
];
