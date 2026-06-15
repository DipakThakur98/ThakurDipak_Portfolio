import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/DipakThakur98', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/dipak-thakur-630139215', label: 'LinkedIn' },
    { icon: <FiInstagram size={18} />, href: 'https://instagram.com/', label: 'Instagram' },
    { icon: <FiMail size={18} />, href: 'mailto:dipakthakur435@gmail.com', label: 'Email' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t mt-20 w-full" style={{ borderColor: 'var(--color-dark-border)', background: 'var(--color-dark-card)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 no-underline mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}>
                <span className="text-white">DT</span>
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: 'Poppins', color: 'var(--color-dark-heading)' }}>
                Dipak<span style={{ color: '#2563EB' }}>.</span>
              </span>
            </a>
            <p className="text-xs max-w-xs mx-auto md:mx-0" style={{ color: 'var(--color-dark-text)' }}>
              MERN Stack Developer specializing in building high-quality, responsive and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {quickLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium no-underline transition-colors duration-200 hover:text-[#60A5FA]"
                style={{ color: 'var(--color-dark-text)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 no-underline"
                  style={{ background: 'var(--color-dark-bg)', border: '1px solid var(--color-dark-border)', color: 'var(--color-dark-text)' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
              style={{ background: '#2563EB', color: 'white', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>

        </div>

        <hr className="my-8" style={{ borderColor: 'var(--color-dark-border)', opacity: 0.5 }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'var(--color-dark-text)' }}>
          <p>© {new Date().getFullYear()} Dipak Thakur. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
