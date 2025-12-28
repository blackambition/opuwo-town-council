
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-blue-900 min-h-[500px] flex items-center text-white" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1600" 
          alt="Aerial view of Opuwo, the capital of Kunene Region, Namibia" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Serving the Heart of <br/>
            the Kunene Region
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Welcome to the official portal of Opuwo Town Council. We are committed to providing quality services, fostering development, and maintaining our cultural heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-amber-600 transition shadow-lg" aria-label="Pay municipal bills online">
              Pay Bills Online
            </button>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-slate-100 transition shadow-lg" aria-label="View official public notices">
              View Public Notices
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
