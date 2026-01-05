
import React from 'react';

const OpenMarket: React.FC = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg">
                  <i className="fa-solid fa-shop"></i>
                </div>
                <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px]">Community Hub</span>
              </div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-8">Opuwo Open Market</h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                The Opuwo Open Market is the commercial heartbeat of our town. It is where traditional commerce meets modern town living, providing a platform for local vendors to sell fresh produce, traditional garments, and authentic Namibian cuisine.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="block text-3xl font-black text-slate-900">150+</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Vendors</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <span className="block text-3xl font-black text-slate-900">06:00</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Opening Hours</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1200" 
                alt="Market Scene" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Sections */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Market Specializations</h2>
            <p className="text-slate-500 mt-4">Organized zones to ensure hygiene and a seamless shopping experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fresh Produce', desc: 'Locally grown vegetables and fruits directly from Kunene gardens.', icon: 'fa-carrot', color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Traditional Attire', desc: 'Custom Herero dresses and Himba craft accessories.', icon: 'fa-shirt', color: 'bg-amber-50 text-amber-600' },
              { title: 'The Kapana Grill', desc: 'Opuwo\'s famous grilled meat and traditional delicacies hall.', icon: 'fa-fire-burner', color: 'bg-rose-50 text-rose-600' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-xl mb-6`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Standards */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="lg:w-3/5">
            <span className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Public Health Priority</span>
            <h2 className="text-4xl font-black mb-8 leading-tight">Safety & Hygiene Excellence</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <i className="fa-solid fa-circle-check text-emerald-500 mt-1"></i>
                <p className="text-slate-300">Bi-weekly sanitation and professional deep cleaning of the entire facility.</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-circle-check text-emerald-500 mt-1"></i>
                <p className="text-slate-300">Continuous monitoring of food preparation standards by Environmental Health officers.</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-circle-check text-emerald-500 mt-1"></i>
                <p className="text-slate-300">Waste segregation system implemented to promote environmental sustainability.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h4 className="font-bold mb-6 text-emerald-500">Vendor Compliance</h4>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                All vendors must hold a valid Fitness Certificate and attend quarterly hygiene workshops organized by the Council.
              </p>
              <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-colors">
                Apply for a Stall
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OpenMarket;
