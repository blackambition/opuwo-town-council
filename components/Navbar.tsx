
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Bulletin', id: 'notices' },
    { name: 'Heritage', id: 'tourism' },
    { name: 'Council', id: 'council' },
    { name: 'Resources', id: 'documents' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-4 pt-4`}>
      <nav className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 border overflow-hidden
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)] py-1' 
          : 'bg-white border-transparent py-3 shadow-none'}
      `}>
        <div className="px-6 flex justify-between items-center h-16">
          <div className="flex items-center shrink-0">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group" 
              onClick={() => onNavigate('home')}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/2a/Opuwo_Town_Council_Logo.png" 
                alt="Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-500"
              />
              <div className="flex flex-col ml-4">
                <span className="font-black text-lg text-slate-950 leading-none uppercase tracking-tighter">Opuwo</span>
                <span className="text-[8px] font-black text-blue-700 uppercase tracking-[0.4em] leading-none mt-1">Council 2025</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                  currentPage === link.id 
                    ? 'text-blue-700 bg-blue-50' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-6 w-px bg-slate-100 mx-4"></div>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-900/20"
            >
              Support Center
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-900 transition-all"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white px-6 py-10 animate-in slide-in-from-top-4 duration-500">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl text-xl font-black tracking-tighter ${
                    currentPage === link.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6 border-t border-slate-100">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs"
                >
                  Contact Admin
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
