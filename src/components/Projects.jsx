import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiSocketdotio } from 'react-icons/si';

const projects = [
  {
    title: 'TripNest',
    subtitle: 'Train Booking Application',
    description: 'A full-stack train booking platform with real-time search, booking management, and secure payment integration. Built with the MERN stack for seamless user experience.',
    image: '🚂',
    color: '#60A5FA',
    tech: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    features: ['User Authentication', 'Train Search', 'Booking Management', 'Ticket Cancellation', 'Responsive Design'],
    github: 'https://github.com/DipakThakur98',
    live: '#',
  },
  {
    title: 'Fashnista',
    subtitle: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced product filtering, search functionality, and a seamless shopping experience powered by REST APIs.',
    image: '🛍️',
    color: '#F472B6',
    tech: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    features: ['Product Search', 'Product Filtering', 'Shopping Experience', 'Responsive UI', 'REST API Integration'],
    github: 'https://github.com/DipakThakur98',
    live: '#',
  },
  {
    title: 'CollabSync',
    subtitle: 'Real-Time Collaboration Tool',
    description: 'A real-time collaboration platform enabling live messaging, multi-user editing, and instant synchronization using WebSocket technology.',
    image: '💬',
    color: '#34D399',
    tech: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    features: ['Live Messaging', 'Multi-user Collaboration', 'Real-time Sync', 'Authentication', 'Responsive Interface'],
    github: 'https://github.com/DipakThakur98',
    live: 'https://realtime-collab-tool-sooty.vercel.app',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionWrapper id="projects">
      <SectionTitle subtitle="My Work" title={<>Featured <span className="gradient-text">Projects</span></>}
        description="Showcasing my best work built with modern technologies." />

      <div ref={ref} className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2 }}
            className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl glass hover:scale-[1.01] transition-all duration-300"
          >
            {/* Project Image */}
            <div className={`rounded-xl flex items-center justify-center min-h-[250px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`, border: `1px solid ${project.color}20` }}>
              <div className="text-center">
                <span className="text-7xl block mb-4">{project.image}</span>
                <h4 className="text-xl font-bold" style={{ color: project.color }}>{project.title}</h4>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: project.color }}>
                {project.subtitle}
              </span>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins' }}>{project.title}</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--color-dark-text)' }}>{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map(t => (
                  <span key={t.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}>
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map(f => (
                  <span key={f} className="px-2.5 py-1 rounded-md text-xs"
                    style={{ background: 'rgba(51,65,85,0.4)', color: 'var(--color-dark-text)' }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all duration-200 hover:scale-105"
                  style={{ background: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)', color: 'var(--color-dark-heading)' }}>
                  <FiGithub /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all duration-200 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)` }}>
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
