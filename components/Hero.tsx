import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-luxury-black">
      
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/20 to-luxury-black"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Architecture" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-luxury-white tracking-tighter mb-8">
              SOLUCIONES <br />
              <span className="italic text-luxury-gold/90 font-light pr-4">LEGALES</span> <br />
              PARA ASUNTOS <br />
              COMPLICADOS
            </h1>
          </div>

          {/* Subtext and CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-4 lg:pl-12 border-l border-white/10">
            <p className="text-luxury-white/80 text-lg leading-relaxed mb-10 font-sans font-light">
              En MR & Asociados brindamos asesoría legal integral con un enfoque humano y profesional. 
              Protegemos lo que más importa.
            </p>
            
            <a 
              href="#contacto" 
              className="hover-trigger group relative w-fit px-8 py-4 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-luxury-gold/50 transition-all duration-300"
            >
              <div className="absolute inset-0 w-0 bg-luxury-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-sm font-bold uppercase tracking-widest text-luxury-white group-hover:text-luxury-gold transition-colors">
                Agendar Consultoría
              </span>
            </a>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-6 md:left-12 animate-bounce">
          <span className="text-[10px] text-luxury-muted uppercase tracking-widest writing-vertical-lr">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;