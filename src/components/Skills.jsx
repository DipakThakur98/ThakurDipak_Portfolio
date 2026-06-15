import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { FiMonitor, FiServer, FiCpu, FiTool, FiBookOpen, FiCode, FiLayers, FiBox, FiSettings } from 'react-icons/fi';

const categories = [
  {
    title: 'Frontend', icon: <FiMonitor size={22} />, color: '#60A5FA',
    skills: [
      { name: 'React.js', icon: <FaReact />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
      { name: 'HTML5 & CSS3', icon: <FiMonitor />, level: 92 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
    ],
  },
  {
    title: 'Backend', icon: <FiServer size={22} />, color: '#34D399',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
      { name: 'Express.js', icon: <SiExpress />, level: 82 },
    ],
  },
  {
    title: 'Database', icon: <FaDatabase size={22} />, color: '#FBBF24',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'MySQL', icon: <SiMysql />, level: 75 },
    ],
  },
  {
    title: 'Languages', icon: <FiCpu size={22} />, color: '#F472B6',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 88 },
      { name: 'Python', icon: <FaPython />, level: 70 },
      { name: 'C++', icon: <SiCplusplus />, level: 72 },
      { name: 'C', icon: <FiCode />, level: 70 },
      { name: 'Java', icon: <FaJava />, level: 68 },
      { name: 'SQL', icon: <FaDatabase />, level: 75 },
    ],
  },
  {
    title: 'Tools', icon: <FiTool size={22} />, color: '#A78BFA',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'GitHub', icon: <FaGithub />, level: 88 },
      { name: 'VS Code', icon: <TbBrandVscode />, level: 90 },
    ],
  },
  {
    title: 'Core Concepts', icon: <FiBookOpen size={22} />, color: '#F87171',
    skills: [
      { name: 'DSA', icon: <FiCode />, level: 80 },
      { name: 'OOP', icon: <FiLayers />, level: 85 },
      { name: 'REST APIs', icon: <FiServer />, level: 90 },
      { name: 'System Design', icon: <FiBox />, level: 70 },
      { name: 'Debugging', icon: <FiSettings />, level: 85 },
    ],
  },
];

function SkillTag({ name, icon, delay, inView, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--color-dark-card)',
        borderColor: 'var(--color-dark-border)',
        color: 'var(--color-dark-heading)',
        boxShadow: `0 4px 12px ${color}10`
      }}
    >
      <span className="text-xl" style={{ color }}>{icon}</span>
      {name}
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="skills">
      <SectionTitle subtitle="My Skills" title={<>Technical <span className="gradient-text">Arsenal</span></>}
        description="Technologies and tools I use to bring ideas to life." />

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: ci * 0.1 }}
            className="p-6 rounded-2xl glass hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${cat.color}15`, color: cat.color }}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold" style={{ fontFamily: 'Poppins' }}>{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, si) => (
                <SkillTag key={skill.name} {...skill} delay={ci * 0.1 + si * 0.05} inView={inView} color={cat.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
