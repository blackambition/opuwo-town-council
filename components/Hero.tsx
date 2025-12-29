
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900" aria-labelledby="hero-title">
      {/* Background with a clean, static professional feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2000" 
          alt="Aerial Opuwo Kunene" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Official Municipal Portal</span>
          
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Serving the Heart of the <span className="text-amber-400">Kunene Region.</span>
          </h1>
          
          <p className="text-lg text-slate-200 mb-10 leading-relaxed max-w-xl font-medium">
            Building a modern Opuwo through transparency, efficiency, and excellence in every municipal service we provide.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all shadow-lg">
              Our Services
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              Public Notices
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade into content */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
