
import React from 'react';

const serviceList = [
  { title: 'Water & Utilities', desc: 'Apply for connections, pay bills, or report leaks.', icon: 'fa-droplet' },
  { title: 'Waste Management', desc: 'Refuse collection schedules and sanitation services.', icon: 'fa-trash-can' },
  { title: 'Property & Rates', desc: 'Assessments, land applications, and property taxes.', icon: 'fa-building-columns' },
  { title: 'Building & Planning', desc: 'Building permits, zoning information, and town planning.', icon: 'fa-ruler-combined' },
  { title: 'Business Licenses', desc: 'Register your local business or renew existing permits.', icon: 'fa-briefcase' },
  { title: 'Community Health', desc: 'Public health initiatives and environmental safety.', icon: 'fa-heart-pulse' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 section-heading">Town Council Services</h2>
          <p className="text-slate-600">Access essential town services and digital resources.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <div key={i} className="p-8 rounded-xl border border-slate-100 shadow-sm service-card cursor-pointer">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center mb-6 text-2xl">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <span className="text-blue-700 font-bold text-sm">Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
