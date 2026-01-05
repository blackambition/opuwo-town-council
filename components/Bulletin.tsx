
import React from 'react';

const newsItems = [
  {
    id: 1,
    date: '24 Oct 2024',
    category: 'Infrastructure',
    title: 'Council Approves New Infrastructure Development Plan',
    excerpt: 'Detailed briefing on the upcoming residential expansion and water management upgrades aimed at improving service delivery in Opuwo Extension 4.',
    image: 'https://images.unsplash.com/photo-1590060153074-303de308e824?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    date: '18 Oct 2024',
    category: 'Community',
    title: 'Annual Cleanup Campaign: Keeping Kunene Clean',
    excerpt: 'The Town Council invites all residents to participate in the regional cleanup day scheduled for next Saturday. Supplies will be provided at the main office.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    date: '10 Oct 2024',
    category: 'Finance',
    title: 'New Utility Payment Channels Launched',
    excerpt: 'Residents can now settle their municipal accounts via PayToday and selected EFT channels. This move aims to reduce queues at the banking hall.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    date: '05 Oct 2024',
    category: 'Public Health',
    title: 'Market Inspection Results: Excellence in Hygiene',
    excerpt: 'Recent inspections of the Opuwo Open Market show a significant improvement in compliance with public health standards. Kudos to our local vendors.',
    image: 'https://images.unsplash.com/photo-1488459739036-79c98170586d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    date: '01 Oct 2024',
    category: 'Tenders',
    title: 'Tender Notice: Construction of Otuzemba Bridge',
    excerpt: 'The Opuwo Town Council invites registered contractors to bid for the construction of a new bridge connecting Otuzemba to the main town area.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    date: '25 Sep 2024',
    category: 'Notice',
    title: 'Scheduled Water Maintenance: Weekend Alert',
    excerpt: 'A planned maintenance on the Kunene pipeline will cause water interruptions in some areas this coming Sunday. Please store sufficient water.',
    image: 'https://images.unsplash.com/photo-1518063311542-f53bc57056cd?auto=format&fit=crop&q=80&w=800'
  }
];

const Bulletin: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-blue-900/20">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <span className="text-blue-700 font-black uppercase tracking-[0.3em] text-[10px]">Official Bulletin</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">News & Public Notices</h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
            Stay informed with the latest administrative updates, community stories, and official municipal announcements from the Opuwo Town Council.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <i className="fa-solid fa-calendar-day mr-2 text-blue-600"></i>
                  {item.date}
                </div>
                <h3 className="font-black text-xl text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="text-blue-700 font-black text-xs uppercase tracking-[0.2em] flex items-center group/btn">
                    Read Full Article
                    <i className="fa-solid fa-arrow-right-long ml-2 group-hover/btn:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Simulation */}
        <div className="flex justify-center">
          <button className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            Load Older Archives
          </button>
        </div>

        {/* Subscription Banner */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black mb-4">Subscribe to SMS Alerts</h2>
              <p className="text-slate-400 leading-relaxed">
                Receive critical news and water maintenance alerts directly on your mobile device. Stay connected with your council anywhere in the Kunene region.
              </p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="tel" 
                placeholder="Mobile Number (e.g. 081...)" 
                className="bg-slate-800 border-none rounded-2xl px-8 py-5 text-sm focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64"
              />
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg whitespace-nowrap">
                Join Alert List
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bulletin;
