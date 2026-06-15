export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: "Developed AI and Full-Stack Projects",
    description: "Developed multiple AI and Full-Stack projects demonstrating end-to-end development skills.",
    year: "2023-2025",
    icon: "fas fa-project-diagram",
    color: "primary"
  },
  {
    title: "Interactive Portfolio Systems",
    description: "Built interactive portfolio systems with backend integration and AI features.",
    year: "2024",
    icon: "fas fa-globe",
    color: "secondary"
  },
  {
    title: "IoT Applications",
    description: "Worked on IoT applications using Raspberry Pi for monitoring and automation.",
    year: "2022-2024",
    icon: "fas fa-microchip",
    color: "accent"
  },
  {
    title: "Leadership in Technical Events",
    description: "Main coordinator for college-level hackathons and technical events.",
    year: "2024-2025",
    icon: "fas fa-trophy",
    color: "primary"
  }
];
