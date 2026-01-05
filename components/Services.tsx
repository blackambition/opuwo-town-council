
import React, { useState } from 'react';

interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
  color: string;
  details: string;
  tasks: string[];
  portalLink?: string;
}

const serviceList: ServiceItem[] = [
  { 
    title: 'Water & Utilities', 
    desc: 'Manage your water connections, meter readings, and bill payments online.', 
    icon: 'fa-droplet', 
    color: 'blue',
    portalLink: 'water-utilities',
    details: 'The Department of Water & Utilities ensures the continuous supply of potable water to Opuwo. We manage infrastructure maintenance, water quality testing, and the rollout of pre-paid metering systems.',
    tasks: ['New connection applications', 'Fault reporting (Leaks/Bursts)', 'Statement inquiries', 'Meter reading submissions']
  },
  { 
    title: 'Waste Management', 
    desc: 'Schedules and services for household and commercial refuse collection.', 
    icon: 'fa-trash-can', 
    color: 'emerald',
    details: 'We are committed to keeping Opuwo clean and healthy. Our waste management team handles weekly household pickups, commercial waste removal, and maintains our regional landfill facilities.',
    tasks: ['Refuse collection schedules', 'Skip container requests', 'Hazardous waste guidance', 'Cleanup campaign participation']
  },
  { 
    title: 'Land & Property', 
    desc: 'Property applications, valuations, and urban development information.', 
    icon: 'fa-building-columns', 
    color: 'amber',
    portalLink: 'land-property',
    details: 'Opuwo is expanding rapidly. This department handles the sale of municipal land, property valuations, and ensures that land usage aligns with our strategic development goals.',
    tasks: ['Leasehold applications', 'Property valuation rolls', 'Deeds and transfer assistance', 'Urban expansion planning']
  },
  { 
    title: 'Town Planning', 
    desc: 'Zoning information, building permits, and long-term development plans.', 
    icon: 'fa-ruler-combined', 
    color: 'indigo',
    details: 'The Planning Office regulates building standards and zoning laws to ensure Opuwo grows sustainably. We review all building plans for structural integrity and aesthetic alignment with town bylaws.',
    tasks: ['Building plan submissions', 'Zoning change requests', 'Subdivision approvals', 'Strategic structural planning']
  },
  { 
    title: 'Business Trade', 
    desc: 'Applications for trade permits, fitness certificates, and vendor licenses.', 
    icon: 'fa-briefcase', 
    color: 'rose',
    details: 'Supporting our local economy is a priority. We streamline the process for entrepreneurs to obtain trade permits and ensure all businesses meet national fitness standards.',
    tasks: ['Trade permit applications', 'Fitness certificate inspections', 'Informal trader registration', 'Liquor license clearance']
  },
  { 
    title: 'Environmental Health', 
    desc: 'Monitoring public health standards and environmental safety in our town.', 
    icon: 'fa-heart-pulse', 
    color: 'teal',
    details: 'Our health inspectors monitor food safety at local markets, sanitation standards in public spaces, and environmental pollution risks within the municipal boundaries.',
    tasks: ['Food vendor inspections', 'Water quality monitoring', 'Pest control services', 'Public sanitation audits']
  },
];

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleLearnMore = (service: ServiceItem) => {
    // If the service has a dedicated portal, navigate there directly
    if (service.portalLink && onNavigate) {
      onNavigate(service.portalLink);
    } else {
      setSelectedService(service);
    }
  };

  const closeOverlay = () => setSelectedService(null);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Services</h2>
          <p className="text-slate-500 mt-2 max-w-xl">
            Access core municipal functions and application portals through our streamlined digital desk.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-xl 
                ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
                ${service.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : ''}
                ${service.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : ''}
                ${service.color === 'rose' ? 'bg-rose-50 text-rose-600' : ''}
                ${service.color === 'teal' ? 'bg-teal-50 text-teal-600' : ''}
              `}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <button 
                onClick={() => handleLearnMore(service)}
                className="mt-auto text-blue-700 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all w-fit"
              >
                {service.portalLink ? 'Visit Portal' : 'Learn More'} 
                <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal/Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeOverlay}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={closeOverlay}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className={`md:w-1/3 p-10 flex flex-col items-center justify-center text-center
                ${selectedService.color === 'blue' ? 'bg-blue-600 text-white' : ''}
                ${selectedService.color === 'emerald' ? 'bg-emerald-600 text-white' : ''}
                ${selectedService.color === 'amber' ? 'bg-amber-500 text-white' : ''}
                ${selectedService.color === 'indigo' ? 'bg-indigo-600 text-white' : ''}
                ${selectedService.color === 'rose' ? 'bg-rose-600 text-white' : ''}
                ${selectedService.color === 'teal' ? 'bg-teal-600 text-white' : ''}
              `}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl mb-6 border border-white/20">
                  <i className={`fa-solid ${selectedService.icon}`}></i>
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter leading-tight">
                  {selectedService.title}
                </h4>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
                  Municipal Department
                </div>
              </div>

              <div className="md:w-2/3 p-10 md:p-12 overflow-y-auto max-h-[80vh]">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Overview</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedService.details}
                </p>

                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Core Responsibilities</h5>
                <ul className="space-y-3 mb-10">
                  {selectedService.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <i className="fa-solid fa-circle-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                  <button 
                    onClick={() => {
                      onNavigate?.('documents');
                      closeOverlay();
                    }}
                    className="flex-grow bg-blue-900 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20"
                  >
                    Download Forms
                  </button>
                  <button 
                    onClick={() => {
                      onNavigate?.('contact');
                      closeOverlay();
                    }}
                    className="flex-grow bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all"
                  >
                    Contact Dept.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
