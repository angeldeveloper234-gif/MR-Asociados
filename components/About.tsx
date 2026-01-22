import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.office} 
                alt="Instalaciones MR & Asociados" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-petrol-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-petrol-50 rounded-full -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-petrol-100 rounded-full -z-10 hidden lg:block"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-petrol-800 font-bold tracking-widest text-sm uppercase mb-2 block">
              Sobre la Firma
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Experiencia y <span className="text-petrol-800">Compromiso Jurídico</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Somos un despacho jurídico comprometido con la obtención de resultados justos. 
              Nos especializamos en el manejo de casos de alta complejidad, ofreciendo a nuestros clientes 
              la tranquilidad de una defensa experta, transparente y cercana.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nuestra trayectoria en la región nos respalda como su aliado legal de confianza en Torreón y todo Coahuila.
            </p>

            <div className="space-y-4 mb-8">
              {['Trato Humano y Profesional', 'Estrategia Legal Personalizada', 'Ética y Transparencia'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contacto" 
              className="inline-block px-8 py-3 bg-petrol-900 text-white font-semibold rounded hover:bg-petrol-800 transition-colors shadow-lg shadow-petrol-900/20"
            >
              Conoce Más
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;