export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  features?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Doorbell with Video Streaming",
    description: "An AI and IoT-based smart doorbell system developed using Raspberry Pi for real-time home security monitoring and video streaming functionality.",
    longDescription: "An AI and IoT-based smart doorbell system developed using Raspberry Pi for real-time home security monitoring and video streaming functionality.",
    image: "/smart-doorbell.jpg",
    category: "AI / IoT",
    technologies: ["Raspberry Pi", "Python", "OpenCV", "Video Streaming"],
    features: [
      "Live video streaming",
      "Real-time alerts and monitoring",
      "Lightweight on-device processing",
      "Secure remote access"
    ],
    links: {
      github: "https://github.com/pranavpatil1431"
    }
  },
  {
    id: 2,
    title: "Career Path Website",
    description: "A modern full-stack web platform designed for student registration, login management, and merit list generation.",
    longDescription: "A modern full-stack web platform designed for student registration, login management, and merit list generation. Built using Node.js, Express.js, MySQL and secure backend integration.",
    image: "/career-path.jpg",
    category: "Full-Stack",
    technologies: ["Node.js", "MySQL", "Express", "JavaScript"],
    features: [
      "Student registration and login",
      "Merit list generation",
      "Role-based access control",
      "Responsive UI"
    ],
    links: {
      github: "https://github.com/pranavpatil1431"
    }
  },
  {
    id: 3,
    title: "AI Portfolio Assistant",
    description: "An interactive AI-powered portfolio website featuring a chatbot assistant capable of answering recruiter questions dynamically.",
    longDescription: "An interactive AI-powered portfolio website featuring a chatbot assistant capable of answering recruiter questions dynamically using backend APIs and conversational interfaces.",
    image: "/ai-portfolio-assistant.jpg",
    category: "AI / Web",
    technologies: ["JavaScript", "Node.js", "LangChain", "Chatbot"],
    features: [
      "AI-powered chatbot for recruiter queries",
      "Dynamic backend APIs",
      "Conversational project descriptions",
      "Easy integration with portfolio content"
    ],
    links: {
      github: "https://github.com/pranavpatil1431"
    }
  },
  {
    id: 4,
    title: "GPS Bus Tracking System",
    description: "A real-time GPS bus tracking platform providing live location updates, route visualization and ETA predictions for passengers.",
    longDescription: "A real-time GPS bus tracking platform providing live location updates, route visualization and ETA predictions for passengers.",
    image: "https://imgs.search.brave.com/xL7V32bbSfiJjraklt2srO5aBaS6icwcSYIq1Ma-WFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG90/YnVzLnVzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L1Nj/aG9vbEJ1cy01ODh4/NDQwLmpwZw",
    category: "IoT / Web",
    technologies: ["Node.js", "React", "MongoDB", "GPS", "Google Maps API"],
    features: [
      "Real-time bus location tracking",
      "ETA calculation for each stop",
      "Route visualization on map",
      "Push notifications for bus arrivals",
      "Historical data analysis for route optimization"
    ],
    links: {
      github: "https://github.com/pranavpatil1431"
    }
  },
  {
    id: 5,
    title: "Smart Home Automation (Google Assistant)",
    description: "Voice-controlled smart automation system integrated with Google Assistant for seamless control.",
    longDescription: "Voice-controlled smart automation system integrated with Google Assistant for seamless control across home appliances and IoT devices.",
    image: "https://imgs.search.brave.com/3oHiPUoOZGPecT2Dfv-nZjXEnJ29fe-dPOQtguXm278/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWFydC1ob21l/LWF1dG9tYXRpb24t/c3lzdGVtLXRoYXQt/YWxsb3dzLXlvdS1j/b250cm9sLXlvdXIt/aG9tZS13aXRoLXRv/dWNoLWJ1dHRvbi1h/ci0xNjktam9iLWlk/LWZjMGI2ZTgxNjgx/ZTRlODJhOTBjNmE0/YjY5NTlhNTM4XzEx/MzQ5MDEtNTc4MTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA",
    category: "IoT",
    technologies: ["NodeMCU", "IFTTT", "Google Assistant API", "Arduino"],
    features: [
      "Voice command recognition and processing",
      "Integration with multiple home appliances",
      "Custom command creation",
      "Scheduled automation routines",
      "Remote control via mobile app"
    ],
    links: {
      github: ""
    }
  },
  {
    id: 6,
    title: "RAG Chatbot using LangChain and HuggingFace",
    description: "A Retrieval-Augmented Generation (RAG) chatbot that answers questions contextually using custom datasets.",
    longDescription: "A Retrieval-Augmented Generation (RAG) based chatbot built with Python, LangChain, HuggingFace, and FAISS. Uses LangChain's RAG pipeline and vector similarity search to provide contextual answers from custom datasets.",
    image: "https://imgs.search.brave.com/Y2KV-eNxPMNYxpvEeu4-4BOrE0WeslqdcIn2cNa7tD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWM3/M2JmNDNvenA5dS5j/bG91ZGZyb250Lm5l/dC9jaGF0Ym90L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/LzI4MTEzMTEwL1JB/Ry1jaGF0Ym90Lmpw/Zw",
    category: "AI / NLP",
    technologies: [
      "Python",
      "LangChain",
      "HuggingFace Transformers",
      "FAISS",
      "sentence-transformers",
      "Streamlit"
    ],
    features: [
      "Loads data from .txt file (faq.txt)",
      "LangChain's RAG pipeline for intelligent responses",
      "Vector similarity search using FAISS",
      "Embeddings from sentence-transformers/all-MiniLM-L6-v2",
      "Powered by HuggingFace's flan-t5-base model (no OpenAI key required)",
      "Resource caching with Streamlit's @st.cache_resource",
      "Handles file paths dynamically for portability",
      "Optional: Deployable on Streamlit"
    ],
    links: {
      github: "https://github.com/pranavpatil1431"
    }
  }
];
