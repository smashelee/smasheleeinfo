import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [codeText, setCodeText] = useState('');
  const fullCode = "public class SmasheleePlugin extends Plugin {\n  @Override\n  public void load(Context context) {\n    hookActionBar();\n    injectCustomUI();\n  }\n  \n  private void hookActionBar() {\n    XposedHelpers.findAndHookMethod(\n      ActionBar.class, \"onCreate\",\n      new XC_MethodHook() {\n        @Override\n        protected void afterHookedMethod(MethodHookParam param) {\n          customizeActionBar((ActionBar) param.thisObject);\n        }\n      }\n    );\n  }\n}";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCodeText(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-6 perspective-1000">
      <div className="absolute inset-0 bg-noise opacity-30 z-0 pointer-events-none"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saile-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center relative"
      >
        <h1 className="font-chaos text-7xl md:text-9xl lg:text-[11rem] text-saile-accent leading-none drop-shadow-[0_0_25px_rgba(196,214,77,0.4)] relative group mb-12">
          <span className="relative z-10">SMASH</span><br/>
          <span className="relative z-10">ELEE</span>
          <span className="absolute inset-0 blur-xl text-saile-light opacity-50 group-hover:opacity-80 transition-opacity duration-500">SMASH<br/>ELEE</span>
        </h1>

        <motion.div 
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
           <div className="glass-card bg-saile-dark/60 px-16 py-6 md:px-24 md:py-8 rounded-2xl relative overflow-hidden border border-saile-accent/20">
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saile-accent opacity-80 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saile-accent opacity-80 rounded-br-2xl"></div>

              <div className="text-center">
                 <h3 className="font-chaos text-3xl md:text-4xl text-white leading-none tracking-wide">
                    SYSTEM <span className="text-saile-accent">ROLE</span>
                 </h3>
                 <div className="h-0.5 w-32 md:w-48 bg-saile-accent mt-3 mb-3 mx-auto"></div>
                 <p className="font-mono text-xs md:text-sm text-saile-accent/80 tracking-[0.3em] uppercase">
                    Java Plugin Developer
                 </p>
              </div>

           </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
         <div className="h-16 w-[1px] bg-saile-accent/20 relative overflow-hidden">
            <motion.div 
               className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-saile-accent to-transparent"
               animate={{ top: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
         </div>
         <span className="text-[10px] font-mono text-saile-accent/50 tracking-widest writing-vertical-rl rotate-180 uppercase">
            Scroll_Down
         </span>
      </motion.div>
    </section>
  );
};