export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const skills: SkillCategory = {
  "Frontend Development": [
    { name: "React.js", percentage: 92 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 92 }
  ],
  "Backend Development": [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 82 },
    { name: "REST APIs", percentage: 88 }
  ],
  "Database": [
    { name: "MySQL", percentage: 86 },
    { name: "MongoDB", percentage: 80 }
  ],
  "Programming Languages": [
    { name: "Java", percentage: 80 },
    { name: "Python", percentage: 85 },
    { name: "JavaScript", percentage: 92 }
  ],
  "AI & Technologies": [
    { name: "Artificial Intelligence", percentage: 80 },
    { name: "Machine Learning Basics", percentage: 75 },
    { name: "IoT Systems", percentage: 82 },
    { name: "Raspberry Pi", percentage: 78 }
  ],
  "Tools & Platforms": [
    { name: "GitHub", percentage: 90 },
    { name: "VS Code", percentage: 92 },
    { name: "Vercel", percentage: 75 },
    { name: "Render", percentage: 70 }
  ],
};
