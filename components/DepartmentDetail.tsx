
import React from 'react';

interface DepartmentData {
  title: string;
  head: string;
  headTitle: string;
  icon: string;
  color: string;
  description: string;
  functions: string[];
  projects: string[];
}

const depts: Record<string, DepartmentData> = {
  'dept-planning': {
    title: 'Planning and Properties Department',
    head: 'Maria Shikongo',
    headTitle: 'Strategic Executive: Planning',
    icon: 'fa-map-location-dot',
    color: 'amber',
    description: 'The Planning and Properties department is responsible for the sustainable urban development of Opuwo. This includes the management of municipal land, spatial planning, and ensuring that all building activities comply with Town Planning Schemes and building regulations.',
    functions: [
      'Land application and allocation management',
      'Urban spatial planning and structure plans',
      'Building plan evaluations and site inspections',
      'GIS mapping and property registry maintenance',
      'Township establishment and surveying coordination'
    ],
    projects: [
      'Opuwo Extension 4 Residential Surveying',
      'Industrial Zone A Infrastructure Planning',
      'Informal Settlement Upgrading Strategy'
    ]
  },
  'dept-technical': {
    title: 'Technical Services Department',
    head: 'Tjiuira Tjombumbi',
    headTitle: 'Strategic Executive: Technical Services',
    icon: 'fa-gears',
    color: 'blue',
    description: 'Technical Services ensures the development and maintenance of Opuwo\'s physical infrastructure. This department manages the water supply chain, road networks, and municipal mechanical workshops to keep the town functioning efficiently.',
    functions: [
      'Water infrastructure maintenance and distribution',
      'Road construction and gravel road grading',
      'Stormwater management and drainage systems',
      'Municipal fleet and mechanical workshop management',
      'Project management for capital infrastructure works'
    ],
    projects: [
      'Kunene Pipeline Efficiency Upgrade',
      'Main Road Resurfacing Phase II',
      'Opuwo Extension 6 Water Connection Rollout'
    ]
  },
  'dept-health': {
    title: 'Public Health and Environmental Management',
    head: 'Nghidipo Amukoto',
    headTitle: 'Head of Public Health',
    icon: 'fa-leaf',
    color: 'emerald',
    description: 'This department is the guardian of Opuwo\'s public health and environmental integrity. We manage waste collection, public sanitation, food safety inspections, and environmental awareness within the municipal boundaries.',
    functions: [
      'Municipal solid waste collection and landfill management',
      'Business fitness and food safety inspections',
      'Environmental impact assessments and monitoring',
      'Pest and vector control in public spaces',
      'Opuwo Open Market management and sanitation'
    ],
    projects: [
      'Smart Waste Segregation Initiative',
      'Green Opuwo Tree Planting Campaign',
      'Regional Landfill Expansion Project'
    ]
  },
  'dept-hr': {
    title: 'HR and Administration',
    head: 'David Tjiueza',
    headTitle: 'Executive: Corporate Services',
    icon: 'fa-users-gear',
    color: 'indigo',
    description: 'The HR and Administration department serves as the backbone of the Council\'s human capital and corporate governance. We focus on talent management, legal compliance, and the administrative efficiency of the Council\'s operations.',
    functions: [
      'Recruitment, training, and employee development',
      'Corporate governance and council secretariat',
      'Legal services and municipal by-laws coordination',
      'Records management and public relations',
      'Staff wellness and performance management'
    ],
    projects: [
      'E-Governance Internal Workflow Digitization',
      'Skills Gap Analysis 2025',
      'Council Policy Review Framework'
    ]
  },
  'dept-finance': {
    title: 'Finance, IT and Fixed Asset',
    head: 'Selma Kamberipa',
    headTitle: 'Strategic Executive: Finance',
    icon: 'fa-file-invoice-dollar',
    color: 'rose',
    description: 'Responsible for the financial sustainability of the Town Council. This department handles budgeting, revenue collection, procurement, and the technological infrastructure that powers our municipal services.',
    functions: [
      'Annual budget preparation and financial reporting',
      'Revenue collection and utility billing management',
      'Public procurement and supply chain management',
      'IT infrastructure and systems security',
      'Asset management and municipal valuation rolls'
    ],
    projects: [
      'Pre-paid Metering Billing Integration',
      'Public Portal Development Phase I',
      'Municipal Asset Digital Inventory'
    ]
  }
};

interface DeptDetailProps {
  deptId: string;
}

const DepartmentDetail: React.FC<DeptDetailProps> = ({ deptId }) => {
  const data = depts[deptId];

  if (!data) return <div className="py-24 text-center">Department not found.</div>;

  const colorClasses: Record<string, string> = {
    amber: 'bg-amber-500',
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-600',
    indigo: 'bg-indigo-600',
    rose: 'bg-rose-600'
  };

  const lightColorClasses: Record<string, string> = {
    amber: 'bg-amber-50 text-amber-600',
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    rose: 'bg-rose-50 text-rose-600'
  };

  return (
    <main className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-14 h-14 ${colorClasses[data.color]} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
              <i className={`fa-solid ${data.icon}`}></i>
            </div>
            <div>
              <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Municipal Department</span>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">{data.title}</h1>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Departmental Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {data.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Key Functions</h3>
                  <ul className="space-y-4">
                    {data.functions.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-slate-700 font-medium">
                        <i className={`fa-solid fa-circle-check mt-1 ${lightColorClasses[data.color].split(' ')[1]}`}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Current Strategic Projects</h3>
                  <div className="space-y-4">
                    {data.projects.map((p, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-900">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <h2 className="text-2xl font-black mb-6">Digital Service Portal</h2>
               <p className="text-slate-400 mb-10 max-w-xl">
                 Many {data.title} services are available for digital application. Reduce processing time by submitting your documents through our online channels.
               </p>
               <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all">
                 Access Department Portal
               </button>
            </div>
          </div>

          {/* Sidebar / Head of Dept */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm text-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden mx-auto mb-6 bg-slate-100">
                <img src={`https://i.pravatar.cc/300?u=${data.head.replace(' ', '')}`} className="w-full h-full object-cover" alt={data.head} />
              </div>
              <h3 className="text-lg font-black text-slate-900">{data.head}</h3>
              <p className={`text-[10px] font-black uppercase tracking-widest mt-2 ${lightColorClasses[data.color].split(' ')[1]}`}>
                {data.headTitle}
              </p>
              <div className="h-px bg-slate-100 my-8"></div>
              <button className="w-full py-4 rounded-xl border border-slate-200 text-slate-500 font-bold text-xs hover:bg-slate-50 transition-colors">
                Contact Office
              </button>
            </div>

            <div className={`${lightColorClasses[data.color].split(' ')[0]} border border-slate-100 rounded-[2rem] p-8`}>
              <h4 className="font-bold text-slate-900 mb-4">Department Notice</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consultation hours for public queries are Monday to Thursday from 08:00 - 13:00. Please book an appointment via the support center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DepartmentDetail;
