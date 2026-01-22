import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: "01",
    title: "Derecho Familiar",
    description: "Resolución de conflictos de divorcio, guarda y custodia, pensiones alimenticias, sucesiones y patrimonio familiar. Protegemos el núcleo de la sociedad.",
    image: "https://images.unsplash.com/photo-1629904853716-f004c377dd6d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Derecho Laboral",
    description: "Defensa integral de los derechos del trabajador y asesoría estratégica patronal. Equilibrio y justicia en las relaciones laborales.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Derecho Penal",
    description: "Representación jurídica sólida y defensa técnica especializada. Estrategias de litigación para la protección de su libertad.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Asesoría Integral",
    description: "Consultoría legal personalizada para personas físicas y morales. Prevención de conflictos y blindaje jurídico corporativo.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="servicios" className="bg-luxury-black py-20 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-white">
            Nuestros <span className="italic text-luxury-muted">Servicios</span>
          </h2>
          <span className="text-luxury-gold text-xs font-bold uppercase tracking-widest mt-4 md:mt-0">
            Áreas de Práctica
          </span>
        </div>

        <div className="flex flex-col">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id}
              className="group hover-trigger border-b border-white/10 transition-all duration-500 ease-in-out hover:border-luxury-gold/30 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              onClick={() => setActiveService(activeService === index ? null : index)} // Tap to toggle on mobile
            >
              <div className="py-8 md:py-10 flex flex-col relative overflow-hidden">
                
                {/* Top Row: ID, Title, Arrow */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-xs md:text-sm text-luxury-muted group-hover:text-luxury-gold transition-colors w-8 md:w-12">
                    {service.id}
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-luxury-white group-hover:text-luxury-white/90 group-hover:translate-x-4 transition-transform duration-500 flex-1">
                    {service.title}
                  </h3>

                  <ArrowUpRight className={`w-5 h-5 md:w-6 md:h-6 text-luxury-muted group-hover:text-luxury-gold transition-all duration-500 ${activeService === index ? 'rotate-45 text-luxury-gold' : ''}`} />
                </div>

                {/* Accordion Content - Expands Height */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeService === index ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Empty space to align with title */}
                    <div className="hidden md:block md:col-span-1"></div>
                    
                    {/* Image */}
                    <div className="md:col-span-4 h-48 md:h-56 w-full relative overflow-hidden rounded-sm">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
                      />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                      <p className="text-luxury-white/80 text-base md:text-lg leading-relaxed font-light">
                        {service.description}
                      </p>
                      <span className="mt-6 text-luxury-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                        Más Información <span className="w-8 h-[1px] bg-luxury-gold"></span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;