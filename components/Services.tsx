
import React from 'react';

const serviceList = [
  { title: 'Water & Utilities', desc: 'Manage your water connections, meter readings, and bill payments online.', icon: 'fa-droplet', color: 'blue' },
  { title: 'Waste Management', desc: 'Schedules and services for household and commercial refuse collection.', icon: 'fa-trash-can', color: 'emerald' },
  { title: 'Land & Property', desc: 'Property applications, valuations, and urban development information.', icon: 'fa-building-columns', color: 'amber' },
  { title: 'Town Planning', desc: 'Zoning information, building permits, and long-term development plans.', icon: 'fa-ruler-combined', color: 'indigo' },
  { title: 'Business Trade', desc: 'Applications for trade permits, fitness certificates, and vendor licenses.', icon: 'fa-briefcase', color: 'rose' },
  { title: 'Environmental Health', desc: 'Monitoring public health standards and environmental safety in our town.', icon: 'fa-heart-pulse', color: 'teal' },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Services</h2>
          <p className="text-slate-500 mt-2 max-w-xl">
            Access core municipal functions and application portals through our streamlined digital desk.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
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
              <p className="text-slate-50 text-sm leading-relaxed mb-8 text-slate-500">
                {service.desc}
              </p>
              <button className="mt-auto text-blue-700 font-bold text-xs uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                Learn More <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
