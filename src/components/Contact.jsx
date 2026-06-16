import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { FiSend, FiMapPin, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import axios from 'axios';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email directly.' });
    }
    setLoading(false);
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  const contactInfo = [
    { icon: <FiMail size={22} />, label: 'Email', value: 'dipakthakur435@gmail.com', href: 'mailto:dipakthakur435@gmail.com' },
    { icon: <FiMapPin size={22} />, label: 'Location', value: 'Rajkot, Gujarat, India', href: null },
  ];

  const socials = [
    { icon: <FiGithub size={22} />, label: 'GitHub', href: 'https://github.com/DipakThakur98', color: '#F1F5F9' },
    { icon: <FiLinkedin size={22} />, label: 'LinkedIn', href: 'https://linkedin.com/in/dipak-thakur-630139215', color: '#0A66C2' },
    { icon: <FiInstagram size={22} />, label: 'Instagram', href: 'https://instagram.com/', color: '#E4405F' },
    { icon: <FiMail size={22} />, label: 'Email', href: 'mailto:dipakthakur435@gmail.com', color: '#60A5FA' },
  ];

  const inputStyle = {
    background: 'var(--color-dark-card)',
    border: '1px solid var(--color-dark-border)',
    color: 'var(--color-dark-heading)',
    outline: 'none',
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle subtitle="Get In Touch" title={<>Let's Work <span className="gradient-text">Together</span></>}
        description="Have a project in mind? Let's discuss how we can bring your ideas to life." />

      <div ref={ref} className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="lg:col-span-2 space-y-6"
        >
          <div className="p-8 rounded-2xl glass">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>Contact Information</h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-dark-text)' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium no-underline" style={{ color: 'var(--color-dark-heading)' }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--color-dark-heading)' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-dark-heading)' }}>Follow Me</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 no-underline"
                    style={{ background: 'var(--color-dark-bg)', border: '1px solid var(--color-dark-border)', color: s.color }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-heading)' }}>Name</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#2563EB]"
                  style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-heading)' }}>Email</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#2563EB]"
                  style={inputStyle} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-heading)' }}>Subject</label>
              <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?" className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#2563EB]"
                style={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-heading)' }}>Message</label>
              <textarea rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-all focus:ring-2 focus:ring-[#2563EB]"
                style={inputStyle} />
            </div>

            {status.message && (
              <div className={`p-3 rounded-xl text-sm font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                style={{ background: status.type === 'success' ? 'rgba(52,211,153,0.1)' : 'rgba(248,113,113,0.1)' }}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
              {loading ? 'Sending...' : <><FiSend /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
