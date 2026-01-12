import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001
  });

  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-saile-accent z-[9990] shadow-[0_0_15px_rgba(196,214,77,0.6)]"
      style={{ width }}
    />
  );
};