
import React from 'react';

const attractions = [
  {
    title: 'Himba Cultural Heritage',
    desc: 'Opuwo is the gateway to the Kaokoland, home to the iconic Himba people. Experience authentic traditional lifestyles and craftsmanship.',
    image: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=800',
    tag: 'Culture'
  },
  {
    title: 'Epupa Falls',
    desc: 'Located 180km north of Opuwo, these majestic falls on the Kunene River are a must-see natural wonder of Namibia.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
    tag: 'Nature'
  },
  {
    title: 'Kaokoland Landscapes',
    desc: 'Rugged mountains and vast desert plains offer unparalleled adventure for 4x4 enthusiasts and nature photographers.',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27947?auto=format&fit=crop&q=80&w=800',
    tag: 'Adventure'
  }
];

const TourismHeritage: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="tourism">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Experience Kunene</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Cultural Capital of the North</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Opuwo is more than a town; it is the beating heart of the Kunene region. From the ancient traditions of the Himba and Herero people to the thundering waters of Epupa Falls, discover the soul of Namibia.
            </p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all transform hover:-translate-y-1">
            Explore Tourism Guide <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, idx) => (
            <article key={idx} className="group relative rounded-2xl overflow-hidden h-[450px] shadow-2xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-amber-500 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  {item.tag}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 p-1 bg-gradient-to-r from-amber-500 via-orange-600 to-blue-900 rounded-3xl">
          <div className="bg-slate-900 rounded-[calc(1.5rem-1px)] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-4">Plan Your Journey to Epupa</h3>
              <p className="text-slate-400 max-w-xl">
                The C43 road from Opuwo to Epupa offers a breathtaking journey through dry riverbeds and mountainous terrain. Ensure your vehicle is 4x4 ready and your camera is charged.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-4">
               <div className="text-center">
                 <div className="text-3xl font-bold text-amber-500 mb-1">180km</div>
                 <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Distance</div>
               </div>
               <div className="w-px h-12 bg-slate-800"></div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-amber-500 mb-1">3.5h</div>
                 <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Drive Time</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismHeritage;
