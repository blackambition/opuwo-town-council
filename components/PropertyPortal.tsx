
import React, { useState } from 'react';

const PropertyPortal: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'business'>('all');
  
  // Registry Search State
  const [erfSearch, setErfSearch] = useState('');
  const [registryResult, setRegistryResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const availablePlots = [
    { id: 'ERF-2041', size: '450', zone: 'Residential', status: 'For Sale', price: 'N$ 67,500', area: 'Opuwo Extension 4' },
    { id: 'ERF-1102', size: '1,200', zone: 'Business', status: 'For Sale', price: 'N$ 180,000', area: 'Main Road North' },
    { id: 'ERF-2045', size: '380', zone: 'Residential', status: 'Reserved', price: 'N$ 57,000', area: 'Opuwo Extension 4' },
    { id: 'ERF-3012', size: '500', zone: 'Residential', status: 'For Sale', price: 'N$ 75,000', area: 'Otuzemba Heights' },
    { id: 'ERF-059', size: '2,500', zone: 'Industrial', status: 'For Sale', price: 'N$ 375,000', area: 'Industrial Zone A' },
    { id: 'ERF-3015', size: '420', zone: 'Residential', status: 'For Sale', price: 'N$ 63,000', area: 'Otuzemba Heights' },
  ];

  const handleRegistrySearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setRegistryResult(null);

    // Simulate a database lookup delay
    setTimeout(() => {
      if (erfSearch.toUpperCase().includes('ERF')) {
        setRegistryResult({
          owner: 'Nangolo, Johannes M.',
          regDate: '12 March 2018',
          size: '520',
          zone: 'Residential (Zone A)',
          valuation: 'N$ 485,000.00',
          titleType: 'Freehold (Title Deed)',
          status: 'Active / Fully Paid'
        });
      } else {
        setRegistryResult('not_found');
      }
      setIsSearching(false);
    }, 1000);
  };

  const filteredPlots = filter === 'all' 
    ? availablePlots 
    : availablePlots.filter(p => p.zone.toLowerCase() === filter);

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-amber-500/20">
              <i className="fa-solid fa-house-chimney-window"></i>
            </div>
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px]">Land & Property Desk</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Property Registry & Land</h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
            Access official Opuwo municipal land records. Verify property ownership, check Erf specifications, and view available vacant plots for development.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Property Registry Lookup Container */}
            <div className="bg-white rounded-[2.5rem] border border-amber-200 shadow-xl shadow-amber-900/5 overflow-hidden">
              <div className="p-8 md:p-12 bg-gradient-to-br from-amber-50 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Property Registry Lookup</h2>
                    <p className="text-sm text-slate-500 mt-1">Verify current ownership and land specifications from official records.</p>
                  </div>
                  <i className="fa-solid fa-stamp text-amber-200 text-5xl hidden md:block"></i>
                </div>

                <form onSubmit={handleRegistrySearch} className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass text-amber-500"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter Erf Number (e.g. ERF-2041)" 
                    value={erfSearch}
                    onChange={(e) => setErfSearch(e.target.value)}
                    className="w-full pl-14 pr-32 py-5 bg-white border-2 border-amber-100 rounded-2xl outline-none focus:border-amber-500 transition-all font-bold text-slate-900 shadow-sm"
                  />
                  <button 
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-2 bottom-2 bg-amber-500 text-slate-900 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-400 transition-colors disabled:opacity-50"
                  >
                    {isSearching ? 'Searching...' : 'Search Registry'}
                  </button>
                </form>

                {registryResult && registryResult !== 'not_found' && (
                  <div className="bg-white border border-amber-200 rounded-3xl p-8 md:p-10 animate-in slide-in-from-top-4 duration-500 shadow-inner relative">
                    <div className="absolute top-8 right-8 text-amber-100 text-7xl rotate-12 select-none pointer-events-none">
                      <i className="fa-solid fa-shield-check"></i>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 relative z-10">
                      <div className="border-b border-slate-100 pb-4">
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Registered Owner</span>
                        <p className="text-xl font-black text-slate-900">{registryResult.owner}</p>
                      </div>
                      <div className="border-b border-slate-100 pb-4">
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Property Size</span>
                        <p className="text-xl font-black text-slate-900">{registryResult.size} <small className="text-xs font-bold text-slate-400 tracking-normal">SQM</small></p>
                      </div>
                      <div className="border-b border-slate-100 pb-4">
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Zoning Class</span>
                        <p className="text-lg font-bold text-slate-800">{registryResult.zone}</p>
                      </div>
                      <div className="border-b border-slate-100 pb-4">
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Municipal Valuation</span>
                        <p className="text-lg font-bold text-slate-800">{registryResult.valuation}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Title Type</span>
                        <p className="text-sm font-bold text-slate-700">{registryResult.titleType}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">Registration Date</span>
                        <p className="text-sm font-bold text-slate-700">{registryResult.regDate}</p>
                      </div>
                    </div>

                    <div className="mt-10 p-4 bg-amber-50/50 rounded-xl border border-amber-100 flex items-start gap-3">
                      <i className="fa-solid fa-circle-info text-amber-600 mt-1"></i>
                      <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
                        <strong>Registry Note:</strong> This information is a digital extract from the Opuwo Town Council Valuation Roll. For legal purposes or certified Title Deeds, please visit the National Deeds Office or request a formal Valuation Certificate from the Finance Department.
                      </p>
                    </div>
                  </div>
                )}

                {registryResult === 'not_found' && (
                  <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl text-center">
                    <i className="fa-solid fa-file-circle-xmark text-rose-300 text-4xl mb-4"></i>
                    <h4 className="font-bold text-rose-900">Record Not Found</h4>
                    <p className="text-sm text-rose-700 mt-1">The Erf number provided does not match our current digital registry. Please verify the number or contact the Planning Office.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Vacant Land Listings */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="text-2xl font-black text-slate-900">Vacant Land for Sale</h2>
                <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                  {['all', 'residential', 'business'].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setFilter(t as any)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === t ? 'bg-amber-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-900'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPlots.map((plot, i) => (
                  <div key={i} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1">{plot.zone}</span>
                        <h3 className="text-xl font-bold text-slate-900">{plot.id}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${plot.status === 'For Sale' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                        {plot.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Property Size</span>
                        <span className="font-black text-slate-900 text-lg">{plot.size} <small className="text-xs">SQM</small></span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Reserve Price</span>
                        <span className="font-black text-slate-900 text-lg">{plot.price}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-8 bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200">
                      <i className="fa-solid fa-location-dot text-amber-500"></i>
                      <span>{plot.area}</span>
                    </div>

                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-500/20">
                      View Erf Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reference & Tools */}
          <div className="space-y-8">
            {/* Quick Reference Card */}
            <div className="bg-amber-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-amber-600/20">
              <h3 className="text-xl font-bold mb-6">Property Size Reference</h3>
              <p className="text-sm text-amber-100 leading-relaxed mb-8">
                All town land is measured in square meters (SQM). Here is how we categorize plot sizes:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-amber-500/50 pb-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Standard Residential</span>
                    <span className="text-[10px] opacity-70">Single family dwelling</span>
                  </div>
                  <span className="font-black">300 - 600 sqm</span>
                </div>
                <div className="flex justify-between items-center border-b border-amber-500/50 pb-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">General Residential</span>
                    <span className="text-[10px] opacity-70">Multi-unit/Flats</span>
                  </div>
                  <span className="font-black">600 - 1200 sqm</span>
                </div>
                <div className="flex justify-between items-center border-b border-amber-500/50 pb-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Small Business</span>
                    <span className="text-[10px] opacity-70">Retail/Offices</span>
                  </div>
                  <span className="font-black">400 - 900 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Industrial Plot</span>
                    <span className="text-[10px] opacity-70">Manufacturing/Warehousing</span>
                  </div>
                  <span className="font-black">2000+ sqm</span>
                </div>
              </div>
            </div>

            {/* Application Deadlines */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Current Tenders</h3>
              <div className="space-y-6">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1">Open: Ext 4 Blocks</span>
                  <h4 className="font-bold text-slate-900 text-sm">Residential Sale by Tender</h4>
                  <p className="text-[11px] text-slate-500 mt-2">Closing: Nov 30, 2024</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 opacity-60">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Closed: Industrial B</span>
                  <h4 className="font-bold text-slate-900 text-sm">Industrial Lease Allocation</h4>
                  <p className="text-[11px] text-slate-500 mt-2">Allocations in progress</p>
                </div>
              </div>
              <button className="w-full mt-8 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">
                View All Public Tenders
              </button>
            </div>

            {/* Office Contact */}
            <div className="bg-slate-100 rounded-[2rem] p-8">
              <h4 className="font-bold text-slate-900 text-sm mb-4">Planning Department</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                For detailed property maps (GIS) or individual valuation inquiries, please visit our technical desk.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <i className="fa-solid fa-envelope text-blue-600"></i>
                  <span>land@opuwo.town</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <i className="fa-solid fa-phone text-blue-600"></i>
                  <span>+264 65 273 000 (Ext 201)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyPortal;
