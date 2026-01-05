
import React from 'react';

const tenderItems = [
  {
    id: 'OPW/01/2024',
    title: 'Construction of Gravel Roads in Opuwo Extension 4',
    closingDate: '15 Nov 2024',
    status: 'Open',
    category: 'Civil Engineering',
    size: '4.2 MB'
  },
  {
    id: 'OPW/02/2024',
    title: 'Supply and Delivery of Smart Water Meters',
    closingDate: '20 Nov 2024',
    status: 'Open',
    category: 'Procurement of Goods',
    size: '1.5 MB'
  },
  {
    id: 'OPW/03/2024',
    title: 'Consultancy Services for Urban Structure Plan Review',
    closingDate: '05 Dec 2024',
    status: 'Open',
    category: 'Consultancy',
    size: '2.1 MB'
  },
  {
    id: 'OPW/04/2024',
    title: 'Provision of Private Security Services for Municipal Assets',
    closingDate: '10 Oct 2024',
    status: 'Closed',
    category: 'General Services',
    size: '3.1 MB'
  }
];

const Tenders: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center text-xl shadow-lg">
              <i className="fa-solid fa-file-signature"></i>
            </div>
            <span className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px]">Procurement Portal</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Public Tenders & Bids</h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
            Ensuring transparency and fair competition. View active procurement opportunities and download official bidding documents for the Opuwo Town Council.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {tenderItems.map((tender) => (
            <div key={tender.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between group hover:border-blue-300 transition-all">
              <div className="flex-grow lg:max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{tender.id}</span>
                  <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] ${tender.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
                    {tender.status}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-3">{tender.category}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight mb-2">
                  {tender.title}
                </h3>
                <p className="text-sm text-slate-500 flex items-center">
                  <i className="fa-solid fa-calendar-clock mr-2 text-slate-300"></i>
                  Closing: <span className="font-bold text-slate-700 ml-1">{tender.closingDate}</span>
                </p>
              </div>

              <div className="mt-8 lg:mt-0 flex flex-wrap gap-4 items-center">
                <div className="text-right hidden sm:block mr-4">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Format</span>
                  <span className="text-sm font-bold text-slate-900">PDF • {tender.size}</span>
                </div>
                <button 
                  disabled={tender.status === 'Closed'}
                  className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg 
                    ${tender.status === 'Open' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'}
                  `}
                >
                  <i className="fa-solid fa-download"></i>
                  Download Documents
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Procurement Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-black mb-6">Annual Procurement Plan</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Stay ahead of upcoming opportunities by reviewing our long-term strategic procurement goals for the current financial year.
            </p>
            <button className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center group">
              View 2024/25 Plan
              <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Submission Guidelines</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 text-sm text-slate-600">
                <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">1</div>
                <span>Bids must be submitted in a sealed envelope clearly marked with the tender number.</span>
              </li>
              <li className="flex gap-4 text-sm text-slate-600">
                <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">2</div>
                <span>Deliver bids to the designated tender box at the Town Council Head Office, Independence Avenue.</span>
              </li>
              <li className="flex gap-4 text-sm text-slate-600">
                <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">3</div>
                <span>Late submissions will not be accepted under any circumstances.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenders;
