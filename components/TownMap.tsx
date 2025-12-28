
import React from 'react';

const landmarks = [
  { name: 'Opuwo Town Council Offices', type: 'Government', lat: -18.061, lng: 13.840, desc: 'Primary administrative office for Opuwo municipality.' },
  { name: 'Opuwo District Hospital', type: 'Health', lat: -18.065, lng: 13.845, desc: 'Regional medical center serving the Kunene people.' },
  { name: 'Kunene Regional Council', type: 'Regional', lat: -18.058, lng: 13.838, desc: 'Administrative center for the Kunene Region.' },
  { name: 'Opuwo Primary School', type: 'Education', lat: -18.063, lng: 13.842, desc: 'Public educational facility.' },
];

const TownMap: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200" aria-labelledby="map-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 id="map-title" className="text-3xl font-extrabold text-slate-900 section-heading">Navigate Our Town</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Explore Opuwo's key landmarks, municipal offices, and service centers. We are working on a fully interactive GIS mapping system to better serve our residents and investors.
            </p>
            
            <div className="space-y-4">
              {landmarks.map((mark, i) => (
                <article key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition group cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-700 shadow-sm mr-4 group-hover:bg-blue-700 group-hover:text-white transition">
                    <i className={`fa-solid ${mark.type === 'Health' ? 'fa-hospital' : 'fa-building'}`} aria-hidden="true"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 text-sm">{mark.name}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{mark.type}</p>
                  </div>
                  <i className="fa-solid fa-location-arrow text-slate-300 group-hover:text-blue-500 transition" aria-hidden="true"></i>
                </article>
              ))}
            </div>
            
            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-blue-800 transition shadow-md" aria-label="Open detailed town map">
              <i className="fa-solid fa-map-marked-alt mr-2" aria-hidden="true"></i> Open Full Interactive Map
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full aspect-video lg:aspect-square bg-slate-200 rounded-3xl overflow-hidden relative border-8 border-white shadow-2xl">
            {/* Simulation of a Map UI with SEO alt description */}
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
              alt="Geographic layout map of Opuwo Town showing major roads and zones"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
            
            {/* Map Markers Simulation */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
              <div className="relative">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-ping absolute inset-0"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white relative z-10"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded shadow-lg text-[10px] font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                   Main Council Office
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Map Legend</span>
              <div className="space-y-2">
                <div className="flex items-center text-[10px] font-bold text-slate-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Government
                </div>
                <div className="flex items-center text-[10px] font-bold text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Public Space
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownMap;
