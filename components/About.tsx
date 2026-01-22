import React from 'react';
import { TEAM } from '../constants';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="firma" className="bg-luxury-black py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-luxury-white mb-4">
            La Firma <span className="font-sans text-2xl md:text-3xl text-luxury-muted font-light">&</span> Equipo
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          
          {/* Block 1: Value - Human */}
          <div className="hover-trigger col-span-1 md:col-span-2 row-span-1 bg-[#151515] p-8 border border-white/5 hover:border-luxury-gold/20 transition-all duration-500 group flex flex-col justify-between">
            <div className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center">
              <span className="text-luxury-gold text-xs">01</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl italic text-luxury-white/90 group-hover:text-luxury-white transition-colors">
              "Trato Humano y <br/><span className="text-luxury-gold">Profesional</span>"
            </h3>
          </div>

          {/* Block 2: Team Member 1 (Luis) */}
          <div className="hover-trigger col-span-1 md:col-span-1 row-span-1 md:row-span-2 relative group overflow-hidden border border-white/5">
            <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
              <h4 className="text-luxury-white font-serif text-xl">{TEAM[0].name}</h4>
              <p className="text-luxury-gold text-xs uppercase tracking-widest">{TEAM[0].role}</p>
            </div>
          </div>

           {/* Block 3: Location Authority */}
           <div className="hover-trigger col-span-1 md:col-span-1 row-span-1 bg-luxury-white/5 p-8 border border-white/5 flex flex-col items-center justify-center text-center gap-4 group">
             <div className="p-4 rounded-full bg-luxury-gold/10 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500">
                <MapPin className="w-6 h-6" />
             </div>
             <div>
               <p className="text-luxury-white font-bold text-lg">Torreón</p>
               <p className="text-luxury-muted text-sm">y todo Coahuila</p>
             </div>
          </div>

          {/* Block 4: Value - Strategy */}
          <div className="hover-trigger col-span-1 md:col-span-2 row-span-1 bg-[#151515] p-8 border border-white/5 hover:border-luxury-gold/20 transition-all duration-500 flex flex-col justify-between group">
             <div className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center">
              <span className="text-luxury-gold text-xs">02</span>
            </div>
             <h3 className="font-sans font-bold text-2xl md:text-3xl text-luxury-white/80 uppercase tracking-tighter group-hover:tracking-normal transition-all duration-500">
              Estrategia Legal <span className="text-transparent stroke-text stroke-white text-stroke-1">Personalizada</span>
            </h3>
          </div>

          {/* Block 5: Team Member 2 (Jaime) */}
          <div className="hover-trigger col-span-1 row-span-1 relative group overflow-hidden border border-white/5">
             <img src={TEAM[1].image} alt={TEAM[1].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end">
               <h4 className="text-luxury-white font-serif text-lg">{TEAM[1].name}</h4>
               <p className="text-luxury-gold text-[10px] uppercase tracking-widest">{TEAM[1].role}</p>
             </div>
          </div>

           {/* Block 6: Team Member 3 (Guadalupe) */}
           <div className="hover-trigger col-span-1 row-span-1 relative group overflow-hidden border border-white/5">
             <img src={TEAM[2].image} alt={TEAM[2].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end">
               <h4 className="text-luxury-white font-serif text-lg">{TEAM[2].name}</h4>
               <p className="text-luxury-gold text-[10px] uppercase tracking-widest">{TEAM[2].role}</p>
             </div>
          </div>

          {/* Block 7: Value - Ethics */}
          <div className="hover-trigger col-span-1 md:col-span-2 row-span-1 bg-[#151515] p-8 border border-white/5 hover:border-luxury-gold/20 transition-all duration-500 flex flex-col justify-between md:col-start-3 md:row-start-3">
             <div className="w-8 h-8 rounded-full border border-luxury-gold/30 flex items-center justify-center">
              <span className="text-luxury-gold text-xs">03</span>
            </div>
             <h3 className="font-serif text-2xl text-luxury-white text-right">
              Ética & <br/> <span className="italic text-3xl">Transparencia</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;