import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FiMapPin, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    { icon: <FiAward size={24} />, title: 'BCA Graduate', desc: 'Atmiya University • CGPA 8.4' },
    { icon: <FiCode size={24} />, title: 'MERN Stack Developer', desc: 'React, Node.js, Express, MongoDB' },
    { icon: <FiBriefcase size={24} />, title: 'Frontend Intern', desc: 'BrainyBeam Infotech Pvt. Ltd.' },
    { icon: <FiMapPin size={24} />, title: 'Based in India', desc: 'Rajkot, Gujarat' },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle subtitle="About Me" title={<>Get To Know <span className="gradient-text">Me</span></>}
        description="A passionate Full Stack Developer dedicated to crafting exceptional digital experiences." />

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Info cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl glass hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA' }}>
                {item.icon}
              </div>
              <h4 className="text-base font-semibold mb-1">{item.title}</h4>
              <p className="text-sm" style={{ color: 'var(--color-dark-text)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right - Summary */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>
            Passionate about building <span className="gradient-text">impactful web solutions</span>
          </h3>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-dark-text)' }}>
            <p>
              I'm Dipak Thakur, a BCA graduate from Atmiya University with a strong foundation in full stack development.
              My journey in web development started with a deep curiosity for creating interactive user experiences,
              which led me to specialize in the MERN stack.
            </p>
            <p>
              During my internship at BrainyBeam Infotech, I gained hands-on experience in building responsive UIs,
              integrating REST APIs, and developing reusable component architectures. This experience strengthened
              my ability to deliver production-quality code in collaborative environments.
            </p>
            <p>
              I'm passionate about clean code, modern design patterns, and continuously improving my skills through
              DSA practice and building real-world projects. I'm actively seeking opportunities to contribute
              to innovative teams as a Full Stack or MERN Stack Developer.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
