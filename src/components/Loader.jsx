import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onComplete, 400); return 100; }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: '#0F172A' }}
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
            />
            <motion.div
              animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
              style={{ background: 'radial-gradient(circle, #60A5FA, transparent)' }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold glass animate-pulse-glow"
              style={{ fontFamily: 'Poppins' }}>
              <span className="gradient-text">DT</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-semibold mb-8"
            style={{ fontFamily: 'Poppins', color: '#F1F5F9' }}
          >
            Dipak Thakur
          </motion.h2>

          {/* Progress bar */}
          <div className="w-64 h-1.5 rounded-full overflow-hidden" style={{ background: '#1E293B' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #2563EB, #60A5FA)',
              }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-sm"
            style={{ color: '#64748B' }}
          >
            Loading experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
