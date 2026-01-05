
import React from 'react';

const AboutOpuwo: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-white z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2000" 
            alt="Opuwo Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <span className="text-amber-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Official Town Profile</span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Discover <br /><span className="text-amber-500">Opuwo</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            The beating heart of the Kunene Region, where ancient tradition meets modern progress at the gateway to the Kaokoland.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="w-12 h-1.5 bg-amber-500 mb-8"></div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">The Meaning of Opuwo</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In the Otjiherero language, <strong className="text-slate-900">Opuwo</strong> translates to "The End." This name historically signified that for many travelers, the road ended here—it was the final outpost before the vast, untamed wilderness of the Kaokoland.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Today, Opuwo is anything but an end. It is a thriving administrative capital, a cultural melting pot, and a strategic economic hub. It is one of the few places on Earth where you can see Himba women in traditional ochre and Herero women in Victorian-style dresses transacting in modern banks—a testament to Namibian harmony.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="block text-3xl font-black text-blue-900 mb-1">1,350m</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Elevation</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="block text-3xl font-black text-blue-900 mb-1">Semi-Arid</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Climate Zone</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-900 p-10 md:p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-6">Historical Context</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-black text-amber-500">1960s</span>
                  <p className="text-sm text-slate-300">Established as a primary administrative outpost for the Kaokoland district.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-black text-amber-500">1992</span>
                  <p className="text-sm text-slate-300">Designated as the regional capital of the Kunene Region following independence.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-black text-amber-500">2000</span>
                  <p className="text-sm text-slate-300">Proclaimed as a town, initiating a new era of municipal governance and infrastructure.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100">
              <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Strategic Importance</h3>
              <p className="text-sm text-blue-800 leading-relaxed font-medium italic">
                "Opuwo serves as the nerve center for tourism in Northern Namibia, providing the essential infrastructure that supports thousands of annual visitors to Epupa Falls and the Kunene River."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage - High Visual Impact */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4 block">The Cultural Soul</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Unity in Diversity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Traditional Culture" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-[3.5rem] z-0 group-hover:inset-0 transition-all duration-500"></div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-black mb-4 flex items-center gap-3 text-amber-500">
                  <i className="fa-solid fa-person-rays"></i>
                  The Himba People
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Opuwo is the spiritual and commercial hub for the Himba, an indigenous group that has maintained their ancestral lifestyle for centuries. Their presence in the town creates a unique cultural atmosphere found nowhere else in the world.
                </p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-black mb-4 flex items-center gap-3 text-blue-400">
                  <i className="fa-solid fa-users"></i>
                  The Herero Community
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The Herero people bring a rich tapestry of history and fashion to Opuwo. Their iconic 'Ohorokova' dresses and cow-horn-shaped headgear (Otjikaiva) are staple sights in the Opuwo town center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography & Climate */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-black text-slate-900 mb-6">Geography & Landscape</h2>
               <div className="space-y-4 text-slate-600 leading-relaxed">
                 <p>
                   Opuwo is situated on a plateau at an elevation of roughly 1,350 meters above sea level. The town is surrounded by rugged, mountainous terrain characterized by dolomite hills and vast scrubland.
                 </p>
                 <p>
                   The climate is <strong className="text-slate-900">semi-arid</strong>, with high temperatures often reaching 35°C in the summer months (October to March). Rainfall is seasonal and brings a dramatic transformation to the landscape, turning the dusty plains into lush green vistas.
                 </p>
               </div>
               
               <div className="mt-10 flex gap-8">
                  <div className="text-center">
                    <span className="block text-2xl font-black text-slate-900">300mm</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Annual Rainfall</span>
                  </div>
                  <div className="w-px h-12 bg-slate-200"></div>
                  <div className="text-center">
                    <span className="block text-2xl font-black text-slate-900">22.5°C</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mean Temperature</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] overflow-hidden shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1504829857797-ddff29c27947?auto=format&fit=crop&q=80&w=1200" 
                 alt="Landscape" 
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Economy & Future */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Strategic Vision</span>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-16">Toward 2030: A Regional Powerhouse</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Tourism Resilience', desc: 'Developing high-end hospitality infrastructure while preserving the cultural integrity of the region.', icon: 'fa-map-location-dot' },
            { title: 'Logistics Hub', desc: 'Leveraging our position as the primary link between Central Namibia and the Kunene frontier.', icon: 'fa-truck-fast' },
            { title: 'Digital Inclusion', desc: 'Rollout of smart town initiatives to connect our remote community to global markets.', icon: 'fa-wifi' }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-amber-500/50 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className={`fa-solid ${item.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-blue-900 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Welcome to the Gateway</h2>
          <p className="text-blue-200 mb-10 text-lg">
            Whether you are a resident, a visitor, or an investor, Opuwo offers a unique world of opportunity and wonder.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="bg-amber-500 text-slate-900 px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
               Visit Tourism Desk
             </button>
             <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
               View Town Maps
             </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutOpuwo;
