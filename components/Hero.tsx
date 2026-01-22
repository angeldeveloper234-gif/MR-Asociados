import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      >
        <div className="absolute inset-0 bg-petrol-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl mt-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-in slide-in-from-bottom-5 fade-in duration-700">
          Soluciones Legales para <br/>
          <span className="text-teal-400">Asuntos Complicados</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-150">
          En MR & Asociados brindamos asesoría legal integral con un enfoque humano y profesional. 
          Protegemos lo que más le importa con experiencia, ética y compromiso.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-petrol-900 font-bold rounded-sm hover:bg-gray-100 transition-all uppercase tracking-wider text-sm shadow-xl"
          >
            Agendar Consultoría Gratuita
          </a>
          <a 
            href="#servicios" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase tracking-wider text-sm"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;