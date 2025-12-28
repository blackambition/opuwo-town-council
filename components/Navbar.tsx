
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Town Council Services', id: 'services' },
    { name: 'Public Notices', id: 'notices' },
    { name: 'Tourism & Heritage', id: 'tourism' },
    { name: 'The Council', id: 'council' },
    { name: 'Downloads', id: 'documents' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top bar for emergency/utility info */}
      <div className="bg-blue-900 text-white text-[11px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span><i className="fa-solid fa-phone mr-2"></i>Emergency: +264 65 273 911</span>
            <span className="hidden sm:inline"><i className="fa-solid fa-clock mr-2"></i>Mon - Fri: 08:00 - 17:00</span>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-amber-400 whitespace-nowrap">Staff Portal</a>
             <span className="opacity-30">|</span>
             <a href="#" className="hover:text-amber-400 whitespace-nowrap">Tenders</a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-20">
          <div className="flex items-center shrink-0">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer space-x-3" 
              onClick={() => onNavigate('home')}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/2a/Opuwo_Town_Council_Logo.png" 
                alt="Opuwo Town Council" 
                className="h-10 xl:h-12 w-auto"
              />
              <div className="flex flex-col border-l border-slate-200 pl-3">
                <span className="font-bold text-base xl:text-lg text-slate-900 leading-tight uppercase tracking-tight whitespace-nowrap">Opuwo Town Council</span>
                <span className="text-[9px] font-semibold text-slate-600 uppercase tracking-tight leading-none mt-1 whitespace-nowrap">Efficiency · Transparency · Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center flex-nowrap overflow-hidden">
            <div className="flex items-center space-x-0.5 xl:space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-2 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold transition-colors whitespace-nowrap tracking-tight ${
                    currentPage === link.id 
                      ? 'text-blue-700' 
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="ml-2 xl:ml-4 bg-amber-500 text-slate-900 px-3 xl:px-5 py-2 rounded font-bold text-[12px] xl:text-sm hover:bg-amber-600 transition whitespace-nowrap shrink-0"
            >
              Report a Fault
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold ${
                  currentPage === link.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full mt-4 bg-amber-500 text-slate-900 px-4 py-4 rounded-lg font-bold text-center"
            >
              Report a Fault
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
