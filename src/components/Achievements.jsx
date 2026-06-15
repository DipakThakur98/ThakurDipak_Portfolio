import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FiAward, FiCode, FiTarget, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

function AnimatedCounter({ end, duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const endVal = parseInt(end);
    if (isNaN(endVal)) return;
    if (start === endVal) {
      setCount(endVal);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= totalMiliseconds) {
        setCount(endVal);
        return;
      }
      const progress = elapsedTime / totalMiliseconds;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(easeProgress * endVal);
      setCount(currentVal);
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { icon: <FiCode size={28} />, end: 5, suffix: '+', label: 'Projects Built', color: '#60A5FA' },
  { icon: <FiTarget size={28} />, end: 15, suffix: '+', label: 'Technologies Learned', color: '#34D399' },
  { icon: <FiBookOpen size={28} />, end: 200, suffix: '+', label: 'DSA Problems Solved', color: '#FBBF24' },
  { icon: <FiBriefcase size={28} />, end: 1, suffix: '', label: 'Internship Completed', color: '#F472B6' },
];

const certifications = [
  {
    title: 'React.js Certification',
    issuer: 'Scaler Academy',
    icon: <FaReact size={32} />,
    color: '#60A5FA',
    desc: 'Comprehensive certification covering React fundamentals, hooks, state management, and modern patterns.',
  },
];

export default function Achievements() {
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionWrapper id="achievements">
      <SectionTitle subtitle="Achievements" title={<>Milestones & <span className="gradient-text">Certifications</span></>}
        description="Key accomplishments and certifications in my development journey." />

      <div ref={sectionRef}>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: stat.color, fontFamily: 'Poppins' }}>
                <AnimatedCounter end={stat.end} duration={2} />{stat.suffix}
              </div>
              <p className="text-sm" style={{ color: 'var(--color-dark-text)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-2xl glass flex items-center gap-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${cert.color}15`, color: cert.color }}>
                {cert.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiAward style={{ color: '#FBBF24' }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#FBBF24' }}>Certified</span>
                </div>
                <h4 className="text-lg font-bold mb-1" style={{ fontFamily: 'Poppins' }}>{cert.title}</h4>
                <p className="text-sm font-medium mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
                <p className="text-sm" style={{ color: 'var(--color-dark-text)' }}>{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
