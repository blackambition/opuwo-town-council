
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isMobileDeptOpen, setIsMobileDeptOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDeptOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Bulletin', id: 'notices' },
    { name: 'Tenders', id: 'tenders' },
    { name: 'Council', id: 'council' },
    { name: 'Resources', id: 'documents' },
  ];

  const departments = [
    { name: 'Planning and Properties', id: 'dept-planning' },
    { name: 'Technical Services', id: 'dept-technical' },
    { name: 'Public Health and Environmental Management', id: 'dept-health' },
    { name: 'HR and Administration', id: 'dept-hr' },
    { name: 'Finance, IT and Fixed Asset', id: 'dept-finance' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-4 pt-4`}>
      <nav className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 border
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-2xl border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)] py-1' 
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
          
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                currentPage === 'home' ? 'text-blue-700 bg-blue-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Desktop Departments Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDeptOpen(!isDeptOpen)}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl flex items-center gap-2 ${
                  currentPage.startsWith('dept-') ? 'text-blue-700 bg-blue-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Departments
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isDeptOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div className={`absolute top-full left-0 mt-3 w-72 bg-white border border-slate-100 rounded-2xl shadow-2xl py-3 transition-all duration-200 origin-top-left ${isDeptOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => {
                      onNavigate(dept.id);
                      setIsDeptOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${
                      currentPage === dept.id ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link, idx) => {
              const isActive = currentPage === link.id;
              
              return (
                <button
                  key={`${link.id}-${idx}`}
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
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
        <div className={`lg:hidden bg-white px-6 py-6 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[100vh] border-t border-slate-50' : 'max-h-0'}`}>
          <div className="space-y-2 pb-6">
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className={`block w-full text-left px-6 py-4 rounded-2xl text-lg font-black tracking-tighter ${currentPage === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-400'}`}>Home</button>
            
            {/* Mobile Departments Accordion */}
            <div className="px-6 py-2">
              <button 
                onClick={() => setIsMobileDeptOpen(!isMobileDeptOpen)}
                className="w-full flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2"
              >
                Departments
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isMobileDeptOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div className={`mt-2 space-y-1 transition-all duration-300 ${isMobileDeptOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => {
                      onNavigate(dept.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${
                      currentPage === dept.id ? 'text-blue-700 bg-blue-50' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link, idx) => (
              <button
                key={`${link.id}-mobile-${idx}`}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 rounded-2xl text-lg font-black tracking-tighter ${
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
                onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                className="w-full bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-xs"
              >
                Contact Admin
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
