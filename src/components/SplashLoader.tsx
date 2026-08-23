import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pill } from 'lucide-react';

interface SplashLoaderProps {
  onComplete: () => void;
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          id="custom-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-harmony-dark flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl border border-harmony-teal/30 p-2">
              <img
                src="/logo 2.jpg"
                alt="Jadon Pharmaceuticals Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-display text-white max-w-md text-center px-4">
                Jadon Pharmaceuticals India Private Limited
              </h1>
              <p className="text-xs text-harmony-cream/80 uppercase tracking-widest font-semibold mt-1">
                Healthcare Distribution
              </p>
            </div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-harmony-teal via-harmony-turquoise to-harmony-cream"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
