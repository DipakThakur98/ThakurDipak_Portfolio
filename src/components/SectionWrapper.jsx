import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionWrapper({ children, id, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`section-padding relative w-full ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </motion.section>
  );
}

export function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
          style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA', border: '1px solid rgba(37,99,235,0.2)' }}>
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
        {title}
      </h2>
      {description && <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--color-dark-text)' }}>{description}</p>}
    </div>
  );
}
