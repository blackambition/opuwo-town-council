
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatAssistant from './components/ChatAssistant';
import TownMap from './components/TownMap';
import TourismHeritage from './components/TourismHeritage';
import DocumentRepository from './components/DocumentRepository';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Dynamic Metadata for SEO Optimization
  useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      home: "Opuwo Town Council Home - Efficiency, Transparency, and Excellence in the Kunene region. Gateway to Himba culture and Epupa Falls.",
      services: "Town Council Services - Apply for water, waste management, building permits and property rates in Opuwo.",
      council: "The Council - Meet our leadership, including the Mayor and CEO of Opuwo Town Council.",
      notices: "Public Notices - Stay updated with the latest announcements, tenders, and vacancies in Opuwo.",
      contact: "Contact Opuwo Town Council - Location, telephone, and fault reporting for Opuwo residents.",
      tourism: "Discover Opuwo - Tourism and Heritage hub. Explore Himba culture, Epupa Falls, and the beautiful Kunene landscapes.",
      documents: "Document Repository - Download official municipal forms, building permits, and business registration documents for Opuwo."
    };

    const titles: Record<string, string> = {
      home: "Home | Opuwo Town Council",
      services: "Town Council Services | Opuwo Town Council",
      council: "Leadership & Council | Opuwo Town Council",
      notices: "Public Notices & Updates | Opuwo Town Council",
      contact: "Contact & Support | Opuwo Town Council",
      tourism: "Tourism & Heritage | Opuwo Town Council",
      documents: "Forms & Downloads | Opuwo Town Council"
    };

    document.title = titles[currentPage] || "Opuwo Town Council";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaDescriptions[currentPage] || "Official municipal portal for Opuwo.");
    }
    
    // Smooth scroll to top on "page" change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main id="main-content">
            <Hero />
            
            {/* Quick Link Utility Bar - Navigation Shortcuts for indexing */}
            <nav aria-label="Quick Links" className="bg-slate-100 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: 'Pay Bills', icon: 'fa-credit-card' },
                        { title: 'Fault Report', icon: 'fa-bullhorn' },
                        { title: 'Tenders', icon: 'fa-file-signature' },
                        { title: 'Downloads', icon: 'fa-file-arrow-down', page: 'documents' }
                    ].map((item, i) => (
                        <button 
                          key={i} 
                          onClick={() => item.page && setCurrentPage(item.page)}
                          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-slate-200 group"
                        >
                            <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition">
                                <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                            </div>
                            <span className="font-bold text-slate-800">{item.title}</span>
                        </button>
                    ))}
                </div>
            </nav>

            <Services />

            <TourismHeritage />
            
            <TownMap />

            {/* News & Notices Preview */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <header className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-extrabold text-slate-900 section-heading">Public Notices</h2>
                            <p className="text-slate-600">Latest updates from the Council chambers.</p>
                        </div>
                        <button 
                          onClick={() => setCurrentPage('notices')}
                          className="text-blue-700 font-bold hover:underline hidden sm:block"
                        >
                          All Notices <i className="fa-solid fa-chevron-right ml-1"></i>
                        </button>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 flex flex-col md:flex-row">
                            <div className="md:w-2/5">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Urban Water Project Meeting" />
                            </div>
                            <div className="md:w-3/5 p-8">
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Announcement</span>
                                <h3 className="text-xl font-bold mt-4 mb-4 text-slate-900 leading-tight">Public Consultation: Urban Water Sustainability Project 2024</h3>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3">Join us for a community meeting at the Town Hall to discuss the new infrastructure improvements scheduled for the upcoming financial year...</p>
                                <div className="flex items-center text-slate-400 text-xs mb-6">
                                    <i className="fa-solid fa-calendar mr-2"></i> Oct 24, 2024
                                </div>
                                <button className="text-blue-700 font-bold text-sm hover:underline">Read Full Notice</button>
                            </div>
                        </article>

                        <div className="space-y-4">
                          {[
                            { title: 'Refuse Collection: Public Holiday Schedule', cat: 'Services' },
                            { title: 'Tender: Supply of Solar Street Lights', cat: 'Tenders' },
                            { title: 'Notice of Property Assessment 2024', cat: 'Property' }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex justify-between items-center group cursor-pointer hover:border-blue-200 transition">
                                <div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.cat}</span>
                                    <h4 className="font-bold text-slate-800 mt-1">{item.title}</h4>
                                </div>
                                <i className="fa-solid fa-chevron-right text-slate-300 group-hover:text-blue-500 transition"></i>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </section>
          </main>
        );
      case 'services':
        return <Services />;
      case 'tourism':
        return <TourismHeritage />;
      case 'documents':
        return <DocumentRepository />;
      case 'council':
        return (
          <main className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <header className="mb-20 text-center">
                  <h1 className="text-4xl font-extrabold text-slate-900 mb-6">The Council Leadership</h1>
                  <p className="text-slate-600 max-w-2xl mx-auto text-lg">Our dedicated team working to build a prosperous and sustainable Opuwo.</p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  <article className="text-center group">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-lg">
                          <img src="https://i.pravatar.cc/400?u=mayor" className="w-full h-full object-cover" alt="Mayor Rosa Mbambo" />
                      </div>
                      <h2 className="font-bold text-xl text-slate-900">Hon. Rosa Mbambo</h2>
                      <p className="text-blue-700 font-semibold text-sm mt-1 uppercase tracking-wider">Mayor of Opuwo</p>
                  </article>
                  <article className="text-center group">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-lg">
                          <img src="https://i.pravatar.cc/400?u=clerk" className="w-full h-full object-cover" alt="CEO Johannes Shivute" />
                      </div>
                      <h2 className="font-bold text-xl text-slate-900">Johannes Shivute</h2>
                      <p className="text-blue-700 font-semibold text-sm mt-1 uppercase tracking-wider">Chief Executive Officer</p>
                  </article>
              </div>
            </div>
          </main>
        );
      case 'contact':
        return (
          <main className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-12 bg-blue-900 text-white">
                  <h1 className="text-3xl font-bold mb-8">Contact Our Office</h1>
                  <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                          <i className="fa-solid fa-location-dot mt-1 text-amber-400" aria-hidden="true"></i>
                          <div>
                              <h2 className="font-bold text-sm uppercase tracking-wider">Physical Address</h2>
                              <address className="text-blue-200 text-sm mt-1 not-italic">Main Office Building, Independence Ave, Opuwo, Namibia</address>
                          </div>
                      </div>
                      <div className="flex items-start space-x-4">
                          <i className="fa-solid fa-phone mt-1 text-amber-400" aria-hidden="true"></i>
                          <div>
                              <h2 className="font-bold text-sm uppercase tracking-wider">Telephone</h2>
                              <p className="text-blue-200 text-sm mt-1">+264 65 273 000</p>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Service Feedback Form</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input type="text" required className="w-full px-4 py-3 border border-slate-200 rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Contact Number</label>
                                <input type="tel" required className="w-full px-4 py-3 border border-slate-200 rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder="+264" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea rows={5} required className="w-full px-4 py-3 border border-slate-200 rounded outline-none resize-none focus:ring-2 focus:ring-blue-500" placeholder="Provide details here..."></textarea>
                        </div>
                        <button type="submit" className="px-8 py-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition shadow-lg">Submit Feedback</button>
                    </form>
                </div>
              </div>
            </div>
          </main>
        );
      case 'notices':
        return (
          <main className="py-20 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4">
              <header className="mb-12">
                <h1 className="text-3xl font-extrabold text-slate-900 section-heading">Official Notices & Tenders</h1>
                <p className="text-slate-600">Browse current announcements, public tenders, and job opportunities.</p>
              </header>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <article key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Current Tender</span>
                      <time className="text-slate-400 text-xs">Oct {10 + i}, 2024</time>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Notice of Procurement: Supply of Office Consumables for 2024/25</h2>
                    <p className="text-slate-600 text-sm mb-4">The Opuwo Town Council invites registered entities to bid for the supply and delivery of various office materials...</p>
                    <button className="text-blue-700 font-bold text-sm hover:underline">View Tender Document (PDF)</button>
                  </article>
                ))}
              </div>
            </div>
          </main>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <div className="flex-grow">
        {renderPage()}
      </div>

      <ChatAssistant />

      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center text-white mb-8">
                <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Opuwo_Town_Council_Logo.png" className="h-10 w-auto mr-4 bg-white p-1 rounded" alt="Opuwo Council Logo" />
                <span className="font-bold text-xl uppercase tracking-tight">Opuwo Town Council</span>
              </div>
              <p className="max-w-md leading-relaxed">
                The administrative capital of the Kunene Region, dedicated to bringing quality municipal services to our residents through innovation and traditional values.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Public Disclosures</a></li>
                <li><a href="#" className="hover:text-white transition">PAIA Manual</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between text-[11px] font-bold uppercase tracking-widest">
            <p>© 2024 Opuwo Town Council. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Efficiency · Transparency · Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
