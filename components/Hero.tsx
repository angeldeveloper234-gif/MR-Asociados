import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-luxury-black">
      
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/40 to-luxury-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-transparent to-luxury-black/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Architecture" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Headline */}
          <div className="lg:col-span-8 relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-luxury-white tracking-tighter mb-8">
              SOLUCIONES <br />
              <span className="italic text-luxury-gold/90 font-light pr-4">LEGALES</span> <br />
              PARA ASUNTOS <br />
              COMPLICADOS
            </h1>
          </div>

          {/* Subtext and CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-2 lg:pb-4 lg:pl-12 border-l border-white/10 ml-1 lg:ml-0">
            <p className="text-luxury-white/80 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-sans font-light max-w-md">
              En MR & Asociados brindamos asesoría legal integral con un enfoque humano y profesional. 
              Protegemos lo que más importa.
            </p>
            
            <a 
              href="#contacto" 
              className="hover-trigger group relative w-fit px-8 py-4 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-luxury-gold/50 transition-all duration-300"
            >
              <div className="absolute inset-0 w-0 bg-luxury-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-xs md:text-sm font-bold uppercase tracking-widest text-luxury-white group-hover:text-luxury-gold transition-colors">
                Agendar Consultoría
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Centered and responsive */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] text-luxury-muted uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-luxury-gold/50"></div>
      </div>
    </section>
  );
};

export default Hero;