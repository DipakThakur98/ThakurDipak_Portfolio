import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium" style={{ color: '#60A5FA' }}>Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'Poppins' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Dipak Thakur</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#60A5FA', fontFamily: 'Poppins' }}>
              Full Stack Developer | MERN Stack Developer
            </h2>

            <p className="text-lg mb-3 leading-relaxed" style={{ color: 'var(--color-dark-text)' }}>
              Building Modern Web Applications with MERN Stack
            </p>
            <p className="text-base mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--color-dark-text)' }}>
              I create scalable, responsive and user-focused web applications using React, Node.js and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
                View Projects <FiArrowRight />
              </a>
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold no-underline transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid var(--color-dark-border)', color: 'var(--color-dark-heading)', background: 'var(--color-dark-card)' }}>
                <FiDownload /> Download Resume
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold no-underline transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(37,99,235,0.3)', color: '#60A5FA' }}>
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: 'var(--color-dark-text)' }}>Follow me</span>
              <div className="w-8 h-px" style={{ background: 'var(--color-dark-border)' }} />
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/DipakThakur98', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/dipak-thakur-630139215', label: 'LinkedIn' },
                { icon: <HiOutlineMail size={20} />, href: 'mailto:dipakthakur435@gmail.com', label: 'Email' },
              ].map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all duration-200 hover:scale-110 no-underline"
                  style={{ background: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)', color: 'var(--color-dark-text)' }}
                  aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-first lg:order-last mb-12 lg:mb-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border opacity-20 animate-pulse" style={{ borderColor: '#2563EB' }} />
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border opacity-10" style={{ borderColor: '#60A5FA', animation: 'float 6s ease-in-out infinite' }} />
              </div>
              {/* Avatar Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl glass flex items-center justify-center animate-float overflow-hidden" style={{ padding: '6px' }}>
                <img src="/profile.jpg" alt="Dipak Thakur" className="w-full h-full object-cover rounded-2xl" />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass text-sm font-semibold"
                style={{ color: '#60A5FA' }}
              >
                ⚛️ React.js
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass text-sm font-semibold"
                style={{ color: '#34D399' }}
              >
                🟢 Node.js
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl glass text-sm font-semibold"
                style={{ color: '#FBBF24' }}
              >
                🍃 MongoDB
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
