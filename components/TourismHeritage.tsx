
import React, { useState } from 'react';

interface Attraction {
  title: string;
  desc: string;
  fullDesc: string;
  image: string;
  tag: string;
  details: {
    distance?: string;
    bestTime?: string;
    activity?: string;
  };
}

const attractions: Attraction[] = [
  {
    title: 'Himba Cultural Heritage',
    desc: 'Opuwo is the gateway to the Kaokoland, home to the iconic Himba people. Experience authentic traditional lifestyles and craftsmanship.',
    fullDesc: 'The Himba are one of the last nomadic tribes of Africa, known for their distinctive red ochre paste (otjize) and intricate hairstyles. Opuwo serves as a unique cultural crossroads where ancient traditions meet the modern world. Visitors can learn about their ancestor worship, the "holy fire" (okuruwo), and their remarkable resilience in the arid Kunene climate.',
    image: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=800',
    tag: 'Culture',
    details: {
      activity: 'Village Tours & Crafts',
      bestTime: 'Year-round'
    }
  },
  {
    title: 'Epupa Falls',
    desc: 'Located 180km north of Opuwo, these majestic falls on the Kunene River are a must-see natural wonder of Namibia.',
    fullDesc: 'Epupa Falls (meaning "Falling Water") is a series of waterfalls created by the Kunene River on the border of Angola and Namibia. The falls drop 37 meters over a 1.5km stretch, surrounded by ancient Baobab trees and wild palms. It is a lush oasis in a desert landscape, offering bird watching, hiking trails along the river, and spectacular sunset views.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
    tag: 'Nature',
    details: {
      distance: '180km from Opuwo',
      bestTime: 'April - August',
      activity: 'Hiking & Photography'
    }
  },
  {
    title: 'Kaokoland Landscapes',
    desc: 'Rugged mountains and vast desert plains offer unparalleled adventure for 4x4 enthusiasts and nature photographers.',
    fullDesc: 'Kaokoland is one of the last remaining wilderness areas in Southern Africa. This rugged terrain is home to the rare desert-adapted elephants and black rhinos. The landscape shifts from the red sands of the south to the dolomite mountains of the north. Traveling here requires a 4x4 vehicle and a spirit of adventure, rewarding travelers with profound silence and untamed beauty.',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27947?auto=format&fit=crop&q=80&w=800',
    tag: 'Adventure',
    details: {
      activity: '4x4 Self-Drive',
      bestTime: 'May - September',
      distance: 'Regional expanse'
    }
  }
];

interface TourismHeritageProps {
  onNavigate?: (page: string) => void;
}

const TourismHeritage: React.FC<TourismHeritageProps> = ({ onNavigate }) => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

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
          <button 
            onClick={() => onNavigate?.('documents')}
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5"
          >
            Explore Tourism Guide <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, idx) => (
            <article 
              key={idx} 
              onClick={() => setSelectedAttraction(item)}
              className="group relative rounded-2xl overflow-hidden h-[450px] shadow-2xl cursor-pointer"
            >
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

      {/* Attraction Detail Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedAttraction(null)}
          ></div>
          
          <div className="relative bg-white text-slate-900 w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors z-20"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={selectedAttraction.image} 
                  alt={selectedAttraction.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                <span className="text-amber-600 font-black text-[10px] uppercase tracking-widest mb-2 block">
                  {selectedAttraction.tag} Spotlight
                </span>
                <h3 className="text-2xl font-black mb-6 tracking-tight">{selectedAttraction.title}</h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  {selectedAttraction.fullDesc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {selectedAttraction.details.distance && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</span>
                      <span className="text-xs font-bold text-slate-800">{selectedAttraction.details.distance}</span>
                    </div>
                  )}
                  {selectedAttraction.details.bestTime && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Best Season</span>
                      <span className="text-xs font-bold text-slate-800">{selectedAttraction.details.bestTime}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                  <button 
                    onClick={() => {
                      onNavigate?.('contact');
                      setSelectedAttraction(null);
                    }}
                    className="flex-grow bg-blue-900 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20"
                  >
                    Contact Tourism Office
                  </button>
                  <button 
                    onClick={() => {
                      onNavigate?.('about-opuwo');
                      setSelectedAttraction(null);
                    }}
                    className="flex-grow bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                  >
                    Town History
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

export default TourismHeritage;
