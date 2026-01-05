
import React, { useState } from 'react';

const documentCategories = [
  {
    id: 'building',
    name: 'Building & Planning',
    icon: 'fa-ruler-combined',
    documents: [
      { title: 'Residential Building Permit Application', size: '2.4 MB', type: 'PDF' },
      { title: 'Zoning Clearance Certificate Form', size: '1.1 MB', type: 'PDF' },
      { title: 'Subdivision & Consolidation Request', size: '3.5 MB', type: 'PDF' },
    ]
  },
  {
    id: 'business',
    name: 'Business & Trade',
    icon: 'fa-briefcase',
    documents: [
      { title: 'New Business Registration Form', size: '1.8 MB', type: 'PDF' },
      { title: 'Fitness Certificate Application', size: '950 KB', type: 'PDF' },
      { title: 'Informal Trader Permit Request', size: '1.2 MB', type: 'PDF' },
    ]
  },
  {
    id: 'utilities',
    name: 'Utilities & Billing',
    icon: 'fa-droplet',
    documents: [
      { title: 'Water Connection Application', size: '1.5 MB', type: 'PDF' },
      { title: 'Pre-paid Meter Installation Form', size: '2.1 MB', type: 'PDF' },
      { title: 'Direct Debit Authorization', size: '800 KB', type: 'PDF' },
    ]
  }
];

const DocumentRepository: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = documentCategories.map(cat => ({
    ...cat,
    documents: cat.documents.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.documents.length > 0);

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 section-heading text-left">Digital Document Repository</h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Download official municipal forms and application permits. All files are provided in high-quality PDF format for printing or digital submission.
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-12 relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
          </div>
          <input 
            type="text" 
            placeholder="Search for forms..."
            className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center">
                  <i className={`fa-solid ${category.icon}`}></i>
                </div>
                <h2 className="text-xl font-bold text-slate-800">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {category.documents.map((doc, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-red-500 text-2xl group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-file-pdf"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm leading-tight">{doc.title}</h3>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition shadow-inner"
                      title="Download PDF"
                    >
                      <i className="fa-solid fa-download"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-300 text-6xl mb-6">
              <i className="fa-solid fa-file-circle-xmark"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800">No documents found</h3>
            <p className="text-slate-500">Try adjusting your search criteria or contact the main office for assistance.</p>
          </div>
        )}

        {/* Informational Box */}
        <div className="mt-20 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 text-2xl shadow-sm flex-shrink-0">
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">Submission Guidelines</h4>
            <p className="text-blue-700 text-sm leading-relaxed max-w-3xl">
              Completed forms can be submitted in person at our Independence Avenue offices. Digital queries can be sent to <span className="font-bold">info@opuwo.town</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentRepository;
