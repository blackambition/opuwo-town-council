
import React from 'react';

const TradeFair: React.FC = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1531050171651-74849a211d56?auto=format&fit=crop&q=80&w=2000" 
            alt="Trade Fair Exhibition" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Annual Flagship Event</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-6">
            Opuwo Annual <br /><span className="text-amber-500">Trade Fair</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Connecting local entrepreneurs with regional markets. Namibia's premier cultural and economic exhibition in the Kunene Region.
          </p>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Showcasing Kunene's Potential</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The Opuwo Annual Trade Fair (OATF) is more than just an exhibition; it is a celebration of resilience, innovation, and cultural heritage. Every year, we host over 200 exhibitors ranging from international corporations to local SME artisans.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-amber-50 rounded-[2rem] border border-amber-100">
                  <h3 className="text-amber-900 font-bold mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-cow"></i>
                    Agriculture Sector
                  </h3>
                  <p className="text-sm text-amber-800/80 leading-relaxed">
                    A dedicated arena for livestock auctions and agricultural technology displays, supporting our regional farmers.
                  </p>
                </div>
                <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                  <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-gem"></i>
                    Cultural Crafts
                  </h3>
                  <p className="text-sm text-blue-800/80 leading-relaxed">
                    Exclusive space for traditional Himba and Herero craftsmanship, jewelry, and indigenous knowledge products.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-black mb-6">Exhibitor Registration 2025</h3>
              <p className="text-slate-400 mb-10 max-w-xl">
                Stall applications for the 2025 Trade Fair are now open. Secure your spot in the SME tent or the Corporate Hall today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                  Download Application
                </button>
                <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                  View Stall Map
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6">Event Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fa-solid fa-calendar"></i>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</span>
                    <span className="font-bold text-slate-800">25 - 30 August 2025</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Venue</span>
                    <span className="font-bold text-slate-800">Opuwo Trade Fair Grounds</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fa-solid fa-ticket"></i>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Entry Fee</span>
                    <span className="font-bold text-slate-800">N$ 20.00 (Adults)</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/20">
              <h3 className="text-xl font-black mb-4">Sponsorship</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-8">
                Partner with us to empower the Kunene economy. Custom sponsorship packages are available for 2025.
              </p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-colors">
                Contact Coordinator
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TradeFair;
