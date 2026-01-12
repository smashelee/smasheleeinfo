import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxTextProps {
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: React.PropsWithChildren<ParallaxTextProps>) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="scroller font-chaos text-6xl md:text-9xl uppercase flex whitespace-nowrap flex-nowrap will-change-transform transform-gpu" 
        style={{ x }}
      >
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
      </motion.div>
    </div>
  );
}

export const ScrollMarquee: React.FC = () => {
  return (
    <div className="py-20 md:py-32 mb-20 relative z-0 opacity-40 mix-blend-overlay pointer-events-none select-none">
      <div className="rotate-[-2deg] space-y-12">
        <div className="text-saile-accent/30">
           <ParallaxText baseVelocity={-0.5}>JAVA PLUGINS • EXTERAGRAM • XPOSED • CHAQUOPY •</ParallaxText>
        </div>
        <div className="text-saile-base text-stroke" style={{ WebkitTextStroke: "1px #C4D64D" }}>
           <ParallaxText baseVelocity={0.5}>HOOKING • PYTHON 3.11 • ALIUCORD • UI COMPONENTS •</ParallaxText>
        </div>
      </div>
    </div>
  );
};