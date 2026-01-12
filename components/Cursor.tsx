import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const mainSpringConfig = { damping: 40, stiffness: 1000 }; 
  
  const trailSpringConfig = { damping: 30, stiffness: 300 };

  const cursorX = useSpring(mouseX, mainSpringConfig);
  const cursorY = useSpring(mouseY, mainSpringConfig);
  
  const trailX = useSpring(mouseX, trailSpringConfig);
  const trailY = useSpring(mouseY, trailSpringConfig);

  const scale = useSpring(1, mainSpringConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
        
      setIsHovering(isClickable);
      scale.set(isClickable ? 1.5 : 1);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [mouseX, mouseY, scale]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: scale
        }}
      >
         <div className="relative w-12 h-12 flex items-center justify-center">
            
            <motion.div 
               className="absolute inset-0 rounded-full border border-dashed border-saile-accent/40"
               animate={{ rotate: 360 }}
               transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            ></motion.div>

            <motion.div 
               className="absolute w-8 h-8"
               animate={{ rotate: -360 }}
               transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            >
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-saile-accent rounded-tl-md"></div>
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-saile-accent rounded-br-md"></div>
            </motion.div>

            <motion.div 
               className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isHovering ? 'bg-white shadow-[0_0_10px_#fff]' : 'bg-saile-accent shadow-[0_0_5px_#C4D64D]'}`}
            ></motion.div>

         </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block w-1 h-1 bg-saile-accent/30 rounded-full"
        style={{
            x: trailX,
            y: trailY
        }}
      />
    </>
  );
};