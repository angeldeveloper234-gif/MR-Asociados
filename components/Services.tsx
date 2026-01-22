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
    <section id="servicios" className="bg-luxury-black py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <h2 className="font-serif text-4xl md:text-6xl text-luxury-white">
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
              className="group hover-trigger border-b border-white/10 transition-all duration-500 ease-in-out hover:border-luxury-gold/30"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="py-12 flex flex-col md:flex-row gap-8 md:items-center relative overflow-hidden">
                
                {/* ID */}
                <span className="font-sans text-xs md:text-sm text-luxury-muted group-hover:text-luxury-gold transition-colors w-12">
                  {service.id}
                </span>

                {/* Title */}
                <h3 className="font-serif text-3xl md:text-5xl text-luxury-white group-hover:text-luxury-white/90 group-hover:translate-x-4 transition-transform duration-500 flex-1">
                  {service.title}
                </h3>

                {/* Arrow Icon */}
                <ArrowUpRight className="w-6 h-6 text-luxury-muted group-hover:text-luxury-gold group-hover:rotate-45 transition-all duration-500 opacity-0 md:opacity-100 group-hover:opacity-100" />

                {/* Expanded Content (Desktop) - Styled as a floating visual or inline expansion */}
                <div 
                  className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none transition-all duration-500 ease-out ${
                    activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="bg-luxury-charcoal p-1 rounded-sm border border-white/10">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover grayscale opacity-80"
                    />
                    <div className="p-4">
                      <p className="text-luxury-white/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile description (always visible if need be, or standard flow) */}
                <p className="md:hidden text-luxury-white/60 text-sm mt-4">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;