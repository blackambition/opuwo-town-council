
import React, { useState } from 'react';

const WaterUtilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'management' | 'info'>('management');
  const [balance, setBalance] = useState(450.25);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setBalance(0);
      setIsPaying(false);
    }, 1500);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-blue-600/20">
                <i className="fa-solid fa-droplet"></i>
              </div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Official Resource</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Water & Utilities Portal</h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Serving the Opuwo community with sustainable water management. Access your account or learn about our town's vital infrastructure.
            </p>
          </div>

          <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
            <button 
              onClick={() => setActiveTab('management')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'management' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Account Tools
            </button>
            <button 
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'info' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              General Information
            </button>
          </div>
        </header>

        {activeTab === 'management' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {/* Left Column: Account & Usage */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 md:p-12 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Resident Account</h3>
                    <p className="text-2xl font-black text-slate-900">
                      Balance: <span className={balance === 0 ? 'text-green-600' : 'text-slate-900'}>N$ {balance.toFixed(2)}</span>
                    </p>
                  </div>
                  <button 
                    onClick={handlePayment}
                    disabled={balance === 0 || isPaying}
                    className={`px-8 py-3 rounded-xl font-bold transition-all shadow-lg 
                      ${balance === 0 ? 'bg-slate-100 text-slate-400' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'}
                    `}
                  >
                    {isPaying ? 'Processing...' : balance === 0 ? 'Account Settled' : 'Pay via PayToday/EFT'}
                  </button>
                </div>
                <div className="p-12 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900 mb-8 flex items-center">
                    <i className="fa-solid fa-chart-line mr-3 text-blue-500"></i>
                    Usage Analytics
                  </h4>
                  <div className="flex items-end space-x-4 h-40">
                    {[40, 55, 30, 70, 50, 65].map((h, i) => (
                      <div key={i} className="flex-grow bg-blue-200 rounded-t-lg hover:bg-blue-500 transition-colors relative group">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h} m³
                        </div>
                        <div style={{ height: `${h}%` }} className="w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                   <h4 className="font-bold text-slate-900 mb-4">Tariff Transparency</h4>
                   <p className="text-sm text-slate-500 mb-6">View current water rates per consumption tier (Effective Oct 2024).</p>
                   <button onClick={() => setActiveTab('info')} className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                     View Price Table <i className="fa-solid fa-chevron-right ml-2"></i>
                   </button>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                   <h4 className="font-bold text-slate-900 mb-4">Pre-paid Vending</h4>
                   <p className="text-sm text-slate-500 mb-6">Find authorized pre-paid water vendors in your constituency.</p>
                   <button className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                     Vendor Map <i className="fa-solid fa-chevron-right ml-2"></i>
                   </button>
                </div>
              </div>
            </div>

            {/* Right Column: Active Reporting */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
                <h3 className="text-xl font-bold mb-6">Report an Issue</h3>
                <form onSubmit={handleReportSubmit} className="space-y-4">
                  <input type="text" placeholder="Fault Description" className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 text-sm" />
                  <input type="text" placeholder="Location/Street Name" className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 text-sm" />
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${isSubmitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    {isSubmitted ? 'Success!' : 'Submit Report'}
                  </button>
                </form>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-[2.5rem] p-10">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                  <i className="fa-solid fa-circle-info mr-2"></i> Town Status
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Reservoir Level:</span>
                    <span className="font-bold text-blue-900">88%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Active Outages:</span>
                    <span className="font-bold text-green-600">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-12">
            {/* The Story of Opuwo Water */}
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-200 overflow-hidden relative shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                   <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Infrastructure Spotlight</span>
                   <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">How Opuwo Gets Its Water</h2>
                   <div className="space-y-4 text-slate-600 leading-relaxed">
                     <p>
                       Unlike many towns, Opuwo relies on a dual-source system. Our primary supply comes from the <strong>Kunene River</strong>, pumped via an 180km pipeline.
                     </p>
                     <p>
                       This is supplemented by a network of <strong>Strategic Boreholes</strong> located in the Otuzemba and Opuwo Proper areas. These boreholes are crucial during the dry season, providing a resilient backup for our community.
                     </p>
                     <p>
                       The Opuwo Town Council maintains 4 major reservoirs with a combined capacity of over <strong>5 million liters</strong> to ensure consistent pressure even during peak demand.
                     </p>
                   </div>
                </div>
                <div className="md:w-1/2 w-full aspect-square bg-slate-100 rounded-[2rem] overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&q=80&w=800" alt="Water Infrastructure" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Tariffs Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Water Tariffs (2024/25)</h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-100">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                        <tr>
                          <th className="px-6 py-4">Consumption Tier</th>
                          <th className="px-6 py-4">Rate (per m³)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-700">0 - 6 m³ (Life-line)</td>
                          <td className="px-6 py-4 font-bold text-blue-600">N$ 12.50</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-700">7 - 20 m³</td>
                          <td className="px-6 py-4 font-bold text-blue-600">N$ 18.25</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-700">21 - 45 m³</td>
                          <td className="px-6 py-4 font-bold text-blue-600">N$ 24.80</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-700">Above 45 m³</td>
                          <td className="px-6 py-4 font-bold text-amber-600">N$ 32.10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-6 text-xs text-slate-400 italic">
                    * Rates are subject to VAT for commercial customers. A fixed basic charge of N$ 45.00 applies to all residential connections.
                  </p>
               </div>

               {/* Conservation Guide */}
               <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/20">
                  <h3 className="text-xl font-bold mb-8">Water Saving Tips</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">Night Watering</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">Only water gardens between 19:00 and 07:00 to reduce evaporation.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">Detect Leaks</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">Check your meter regularly. A moving dial when no taps are on indicates a leak.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-bucket"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">Re-use Water</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">Gray water from washing machines can be used for trees and hardy plants.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-shower"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">Short Showers</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">Limit showers to 5 minutes to save up to 45 liters of water per day.</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaterUtilities;
