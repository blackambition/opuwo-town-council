
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatAssistant from './components/ChatAssistant';
import TownMap from './components/TownMap';
import TourismHeritage from './components/TourismHeritage';
import DocumentRepository from './components/DocumentRepository';
import WaterUtilities from './components/WaterUtilities';
import PropertyPortal from './components/PropertyPortal';
import Bulletin from './components/Bulletin';
import Tenders from './components/Tenders';
import DepartmentDetail from './components/DepartmentDetail';
import AboutOpuwo from './components/AboutOpuwo';
import TradeFair from './components/TradeFair';
import OpenMarket from './components/OpenMarket';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      home: "Opuwo Town Council - Professional municipal services for the Kunene region.",
      'about-opuwo': "About Opuwo - Discover the history, culture, and economic potential of Kunene's capital.",
      services: "Access Town Council Services online - Water, waste, building and business permits.",
      council: "Leadership & Governance - Meet the Council driving Opuwo's development.",
      notices: "Public Bulletin - Official news announcements.",
      contact: "Support Hub - Get in touch with our departments.",
      tourism: "Visit Opuwo - Discover our rich heritage and natural wonders.",
      documents: "Resources - Official forms and municipal documents.",
      tenders: "Public Tenders - View active bidding opportunities and procurement documents.",
      'water-utilities': "Manage your water account and utility services in Opuwo.",
      'land-property': "Opuwo Property Portal - Land ownership, vacant erven listings, and plot sizes.",
      'trade-fair': "Opuwo Annual Trade Fair - Kunene's premier economic and cultural exhibition.",
      'open-market': "Opuwo Open Market - The community heart of trade and fresh produce in Opuwo.",
      'dept-ceo': "Office of the CEO - Strategic leadership and management for Opuwo Town Council.",
      'dept-planning': "Planning and Properties Department - Opuwo Town Council urban development.",
      'dept-technical': "Technical Services Department - Infrastructure and water management in Opuwo.",
      'dept-health': "Public Health and Environmental Management - Keeping Opuwo healthy and clean.",
      'dept-hr': "HR and Administration - Corporate services and human capital at Opuwo Town Council.",
      'dept-finance': "Finance, IT and Fixed Asset - Financial management and digital infrastructure."
    };

    const titles: Record<string, string> = {
      home: "Home | Opuwo Town Council",
      'about-opuwo': "About Opuwo | Opuwo Town Council",
      services: "Services | Opuwo Town Council",
      council: "Leadership | Opuwo Town Council",
      notices: "Bulletin | Opuwo Town Council",
      contact: "Contact | Opuwo Town Council",
      tourism: "Tourism | Opuwo Town Council",
      documents: "Library | Opuwo Town Council",
      tenders: "Tenders | Opuwo Town Council",
      'water-utilities': "Water Portal | Opuwo Town Council",
      'land-property': "Property Portal | Opuwo Town Council",
      'trade-fair': "Trade Fair | Opuwo Town Council",
      'open-market': "Open Market | Opuwo Town Council",
      'dept-ceo': "CEO Office | Opuwo Town Council",
      'dept-planning': "Planning Dept | Opuwo Town Council",
      'dept-technical': "Technical Dept | Opuwo Town Council",
      'dept-health': "Health Dept | Opuwo Town Council",
      'dept-hr': "HR Dept | Opuwo Town Council",
      'dept-finance': "Finance Dept | Opuwo Town Council"
    };

    document.title = titles[currentPage] || "Opuwo Town Council";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaDescriptions[currentPage] || "Official municipal portal for Opuwo.");
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage.startsWith('dept-')) {
      return <DepartmentDetail deptId={currentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <main id="main-content" className="bg-slate-50">
            <Hero />
            
            {/* Quick Links */}
            <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-30 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: 'Pay Utilities', icon: 'fa-credit-card', color: 'bg-white', text: 'text-slate-900', page: 'water-utilities' },
                      { title: 'Property Search', icon: 'fa-house-circle-check', color: 'bg-white', text: 'text-slate-900', page: 'land-property' },
                      { title: 'Public Tenders', icon: 'fa-file-signature', color: 'bg-white', text: 'text-slate-900', page: 'tenders' },
                      { title: 'News & Notices', icon: 'fa-bullhorn', color: 'bg-blue-900', text: 'text-white', page: 'notices' }
                    ].map((item, i) => (
                      <button 
                        key={i}
                        onClick={() => item.page && setCurrentPage(item.page)}
                        className={`${item.color} ${item.text} p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-2xl group text-left`}
                      >
                        <div className={`w-12 h-12 ${item.color === 'bg-white' ? 'bg-amber-50 text-amber-700' : 'bg-white/10 text-amber-400'} rounded-xl flex items-center justify-center mb-6`}>
                          <i className={`fa-solid ${item.icon} text-xl`}></i>
                        </div>
                        <span className="font-bold text-base md:text-lg leading-tight">{item.title}</span>
                      </button>
                    ))}
                </div>
            </section>

            <Services onNavigate={setCurrentPage} />
            <TourismHeritage onNavigate={setCurrentPage} />
            <TownMap />
          </main>
        );
      case 'about-opuwo':
        return <AboutOpuwo />;
      case 'trade-fair':
        return <TradeFair />;
      case 'open-market':
        return <OpenMarket />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'tourism':
        return <TourismHeritage onNavigate={setCurrentPage} />;
      case 'documents':
        return <DocumentRepository />;
      case 'tenders':
        return <Tenders />;
      case 'water-utilities':
        return <WaterUtilities />;
      case 'land-property':
        return <PropertyPortal />;
      case 'notices':
        return <Bulletin />;
      case 'council':
        return (
          <main className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <header className="mb-20 text-center">
                  <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Council Leadership</h1>
                  <p className="text-slate-500 max-w-2xl mx-auto">The team dedicated to the development and administration of Opuwo.</p>
              </header>

              <section className="mb-24">
                <h2 className="text-xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">Political Leadership</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { name: 'Hon. Rosa Mbambo', title: 'Mayor of Opuwo', img: 'mayor' },
                      { name: 'Hon. Petrus Shifidi', title: 'Deputy Mayor', img: 'deputymayor' }
                    ].map((person, i) => (
                      <article key={i} className="bg-white rounded-2xl p-6 border border-slate-100 text-center shadow-sm">
                          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-slate-100">
                              <img src={`https://i.pravatar.cc/300?u=${person.img}`} className="w-full h-full object-cover" alt={person.name} />
                          </div>
                          <h3 className="font-bold text-slate-900">{person.name}</h3>
                          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-2">{person.title}</p>
                      </article>
                    ))}
                </div>
              </section>

              {/* CEO Section */}
              <section className="mb-24 bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                        <img src="https://i.pravatar.cc/400?u=ceo" className="w-full h-full object-cover" alt="CEO" />
                    </div>
                    <div>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Chief Executive Officer</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Johannes Shivute</h2>
                        <p className="text-slate-500 text-lg leading-relaxed italic max-w-2xl">
                          "Leading our administration with a focus on sustainable growth and professional service delivery for every resident of Opuwo."
                        </p>
                    </div>
                </div>
              </section>

              {/* Administrative Departments Grid */}
              <section className="mb-24">
                <h2 className="text-xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">Administrative Departments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'Johannes Shivute', dept: 'CEO Office', icon: 'fa-user-tie', id: 'dept-ceo' },
                      { name: 'Maria Shikongo', dept: 'Planning & Properties', icon: 'fa-map-location-dot', id: 'dept-planning' },
                      { name: 'Tjiuira Tjombumbi', dept: 'Technical Services', icon: 'fa-gears', id: 'dept-technical' },
                      { name: 'Nghidipo Amukoto', dept: 'Public Health', icon: 'fa-leaf', id: 'dept-health' },
                      { name: 'David Tjiueza', dept: 'HR & Administration', icon: 'fa-users-gear', id: 'dept-hr' },
                      { name: 'Selma Kamberipa', dept: 'Finance & IT', icon: 'fa-file-invoice-dollar', id: 'dept-finance' }
                    ].map((member, i) => (
                      <article 
                        key={i} 
                        onClick={() => setCurrentPage(member.id)}
                        className="bg-white rounded-2xl p-8 border border-slate-100 flex items-center space-x-6 hover:shadow-md transition-all cursor-pointer group"
                      >
                          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <i className={`fa-solid ${member.icon}`}></i>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{member.name}</h4>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{member.dept}</p>
                          </div>
                      </article>
                    ))}
                </div>
              </section>
            </div>
          </main>
        );
      case 'contact':
        return (
          <main className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-sm">
                <div className="lg:w-1/3 p-12 bg-slate-900 text-white">
                  <h1 className="text-3xl font-bold mb-10">Contact Us</h1>
                  <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                          <i className="fa-solid fa-location-dot text-amber-500 mt-1"></i>
                          <div>
                              <p className="font-bold text-sm uppercase tracking-widest opacity-60">Address</p>
                              <address className="not-italic text-lg">Independence Ave, Opuwo</address>
                          </div>
                      </div>
                      <div className="flex items-start space-x-4">
                          <i className="fa-solid fa-phone text-amber-500 mt-1"></i>
                          <div>
                              <p className="font-bold text-sm uppercase tracking-widest opacity-60">Phone</p>
                              <p className="text-lg">+264 65 273 000</p>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-12 md:p-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <textarea rows={5} placeholder="How can we assist you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                        <button type="submit" className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">Submit Feedback</button>
                    </form>
                </div>
              </div>
            </div>
          </main>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <div className="flex-grow pt-20 lg:pt-24">
        {renderPage()}
      </div>

      <ChatAssistant />

      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center text-white mb-6">
                <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Opuwo_Town_Council_Logo.png" className="h-10 w-auto mr-4 bg-white p-1 rounded" alt="Logo" />
                <span className="font-bold text-xl uppercase tracking-tight text-white">Opuwo Town Council</span>
              </div>
              <p className="max-w-sm leading-relaxed text-sm">
                Dedicated to providing quality municipal services and promoting sustainable development in the heart of the Kunene Region.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-amber-500">Services</button></li>
                <li><button onClick={() => setCurrentPage('council')} className="hover:text-amber-500">The Council</button></li>
                <li><button onClick={() => setCurrentPage('tourism')} className="hover:text-amber-500">Visit Opuwo</button></li>
                <li><button onClick={() => setCurrentPage('water-utilities')} className="hover:text-amber-500">Water Portal</button></li>
                <li><button onClick={() => setCurrentPage('land-property')} className="hover:text-amber-500">Property Portal</button></li>
                <li><button onClick={() => setCurrentPage('tenders')} className="hover:text-amber-500">Public Tenders</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 transition"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-400 transition"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between opacity-40">
            <p>© 2024 Opuwo Town Council. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Efficiency · Transparency · Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
