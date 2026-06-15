import { motion } from "framer-motion";
import { timeline as staticTimeline, TimelineItem } from "../data/timeline";
import GithubCalendar from "./GithubCalendar";
import LeetcodeCalendar from "./LeetcodeCalendar";
import { learningGoals } from "../data/goals";

interface AboutProps {
  timeline?: TimelineItem[];
  aboutMe?: string;
  imageUrl?: string;
}

const About = ({ timeline: timelineProp, aboutMe, imageUrl }: AboutProps) => {
  // Ensure timeline is always an array and fallback to staticTimeline if empty
  const timeline = Array.isArray(timelineProp) && timelineProp.length > 0 ? timelineProp : staticTimeline;

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-2xl p-1 shadow-xl">
              <img 
                src={imageUrl || "/pranav/pranav%20prof%20pic.png"} 
                alt="Pranav Maruti Patil" 
                className="rounded-2xl w-full h-auto" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Full-Stack Developer & AI Engineer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {aboutMe || `I am Pranav Maruti Patil, a passionate Artificial Intelligence & Data Science engineering student with strong interests in Full-Stack Development, Artificial Intelligence, IoT systems, and scalable software solutions.

I enjoy building practical, innovative, and user-focused applications that solve real-world problems using modern technologies. I continuously improve my skills through hands-on projects, hackathons, technical leadership, internships, and collaborative development experiences.

I have experience developing AI-powered systems, IoT applications, and full-stack web platforms using technologies such as React.js, Node.js, JavaScript, MySQL, MongoDB, Python, and Raspberry Pi.

Apart from technical development, I actively participate in hackathons, technical events, and team coordination activities that improve my leadership, communication, teamwork, and problem-solving abilities.

My goal is to become a highly skilled Software Engineer capable of building impactful digital products, scalable applications, and intelligent AI-driven systems.`}
            </p>
            
            <motion.div 
              className="glass rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">What I Do</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Design and develop AI-based smart systems and automation solutions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Build scalable full-stack web applications with modern UI/UX</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Integrate AI models and intelligent features into practical applications</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Develop IoT systems and real-time automation platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Create interactive chatbot systems and AI assistants</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Build responsive and modern digital experiences</span>
                </li>
              </ul>

              <div className="mt-4">
                <h5 className="text-lg font-semibold text-white mb-2">Core Domains</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-dark-lighter rounded-full px-3 py-1 text-sm">Full-Stack Development</span>
                  <span className="bg-dark-lighter rounded-full px-3 py-1 text-sm">Artificial Intelligence</span>
                  <span className="bg-dark-lighter rounded-full px-3 py-1 text-sm">Machine Learning</span>
                  <span className="bg-dark-lighter rounded-full px-3 py-1 text-sm">IoT Systems</span>
                  <span className="bg-dark-lighter rounded-full px-3 py-1 text-sm">Data Science</span>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-code text-primary mr-2"></i>
                <span>Full-Stack</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-robot text-primary mr-2"></i>
                <span>AI & ML</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-microchip text-primary mr-2"></i>
                <span>IoT</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-database text-primary mr-2"></i>
                <span>Data Science</span>
              </div>
            </div>

            <motion.div 
              className="glass rounded-xl p-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">Why Hire Me?</h4>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Strong problem-solving mindset</li>
                <li>Hands-on project development experience</li>
                <li>Passionate about AI and modern technologies</li>
                <li>Quick learner and adaptable developer</li>
                <li>Focused on building practical and scalable solutions</li>
              </ul>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">Learning Goals</h4>
              <p className="text-gray-400 mb-3">Current areas I'm focusing on improving. I'll update these as I progress.</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {learningGoals.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <GithubCalendar />
        </div>
        <div className="mt-10">
          <LeetcodeCalendar />
        </div>

        {/* Timeline */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-10 text-center">My <span className="text-gradient">Journey</span></h3>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="glass-card rounded-xl p-6">
                  <span className="text-accent font-semibold">{item.period}</span>
                  <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-400 mt-2">{item.subtitle}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
