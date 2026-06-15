import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 no-underline">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
            style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}>
            <span className="text-white">DT</span>
          </div>
          <span className="text-xl font-bold" style={{ fontFamily: 'Poppins', color: 'var(--color-dark-heading)' }}>
            Dipak<span style={{ color: '#2563EB' }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 no-underline hover:text-[#60A5FA]"
              style={{ color: 'var(--color-dark-text)' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer"
            style={{ background: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)' }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} color="#FCD34D" /> : <FiMoon size={18} color="#2563EB" />}
          </button>

          <a
            href="#contact"
            className="hidden lg:inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}
          >
            Hire Me
          </a>

          <button
            className="lg:hidden p-2.5 rounded-xl cursor-pointer"
            style={{ background: 'var(--color-dark-card)', border: '1px solid var(--color-dark-border)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={20} color="var(--color-dark-heading)" /> : <HiMenu size={20} color="var(--color-dark-heading)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t"
            style={{ borderColor: 'var(--color-dark-border)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm font-medium no-underline transition-colors hover:text-[#60A5FA]"
                  style={{ color: 'var(--color-dark-text)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
