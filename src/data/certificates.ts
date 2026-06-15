// filepath: src/data/certificates.ts
export interface Certificate {
  title: string;
  icon: string;
  color: string;
  description: string;
  year?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Google Cloud Skills Boost",
    icon: "fas fa-certificate",
    color: "accent",
    description: "Comprehensive certification covering cloud fundamentals and AI/ML basics.",
    year: "2023",
    link: ""
  },
  {
    title: "AI & Machine Learning Fundamentals",
    icon: "fas fa-brain",
    color: "primary",
    description: "Introductory coursework and projects in AI and ML concepts.",
    year: "2023",
    link: ""
  },
  {
    title: "Web Development Internship Experience",
    icon: "fas fa-code",
    color: "secondary",
    description: "Practical internship work on frontend and backend tasks.",
    year: "2023",
    link: ""
  },
  {
    title: "NPTEL Cloud Computing",
    icon: "fas fa-cloud",
    color: "accent",
    description: "NPTEL course on cloud computing fundamentals and services.",
    year: "2023",
    link: ""
  },
  {
    title: "IoT and Automation Learning",
    icon: "fas fa-microchip",
    color: "primary",
    description: "Hands-on learning in IoT systems and automation.",
    year: "2022",
    link: ""
  },
  {
    title: "Full-Stack Development Practice",
    icon: "fas fa-laptop-code",
    color: "secondary",
    description: "Practice and projects covering full-stack web development.",
    year: "2023",
    link: ""
  }
];
