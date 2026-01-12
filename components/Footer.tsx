import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-saile-dark/90 border-t border-saile-accent/10 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-chaos text-2xl text-white">SAILE GREEN</h4>
          <p className="font-mono text-[10px] text-saile-accent/50 tracking-widest mt-1">
            © 2026 SYSTEM CORE // ALL RIGHTS RESERVED
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-right">
           <div className="font-mono text-[10px] text-white/40">
              BUILD_VER: <span className="text-saile-accent/80">4.2.0-RC</span>
           </div>
           <div className="font-mono text-[10px] text-white/40 mt-1">
              LOC: <span className="text-saile-accent/80">EARTH/NET</span>
           </div>
        </div>

      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saile-accent/20 to-transparent"></div>
    </footer>
  );
};