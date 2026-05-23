export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: "Full-Stack & AI Projects",
    description: "Developed multiple full-stack and AI-based projects demonstrating end-to-end development skills.",
    year: "2024-2025",
    icon: "fas fa-project-diagram",
    color: "primary"
  },
  {
    title: "Portfolio Systems",
    description: "Built interactive portfolio systems with backend integration and AI-powered features.",
    year: "2024",
    icon: "fas fa-globe",
    color: "secondary"
  },
  {
    title: "IoT & Raspberry Pi",
    description: "Worked on IoT applications using Raspberry Pi for real-time monitoring and automation.",
    year: "2023-2025",
    icon: "fas fa-microchip",
    color: "accent"
  }
];
