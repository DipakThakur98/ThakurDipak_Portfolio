import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FiCheckCircle } from 'react-icons/fi';

const experience = {
  role: 'Frontend Developer Intern',
  company: 'BrainyBeam Infotech Pvt. Ltd.',
  location: 'Ahmedabad, Gujarat',
  period: 'Internship',
  description: 'Worked on building responsive web interfaces and integrating RESTful APIs in a collaborative team environment.',
  achievements: [
    'Built responsive and pixel-perfect UI components using React.js and Tailwind CSS',
    'Integrated RESTful APIs for dynamic data rendering and user interactions',
    'Developed reusable component libraries improving team development speed by 30%',
    'Collaborated with backend developers and designers in an Agile environment',
    'Optimized application performance through code splitting and lazy loading',
  ],
  skills: ['React.js', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Git'],
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionWrapper id="experience">
      <SectionTitle subtitle="Experience" title={<>Professional <span className="gradient-text">Journey</span></>}
        description="My hands-on experience in building real-world web applications." />

      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, #2563EB, transparent)' }} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative md:ml-20"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[3.25rem] top-8 w-4 h-4 rounded-full hidden md:block animate-pulse-glow"
              style={{ background: '#2563EB', border: '3px solid #0F172A' }} />

            <div className="p-8 rounded-2xl glass hover:scale-[1.01] transition-transform duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins' }}>{experience.role}</h3>
                  <p className="text-base font-medium" style={{ color: '#60A5FA' }}>{experience.company}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-dark-text)' }}>{experience.location}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA', border: '1px solid rgba(37,99,235,0.2)' }}>
                  {experience.period}
                </span>
              </div>

              <p className="mb-6 text-base leading-relaxed" style={{ color: 'var(--color-dark-text)' }}>{experience.description}</p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                {experience.achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle className="mt-1 flex-shrink-0" style={{ color: '#34D399' }} />
                    <span className="text-sm" style={{ color: 'var(--color-dark-text)' }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {experience.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
