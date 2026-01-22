import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-petrol-800 font-bold tracking-widest text-sm uppercase mb-2 block">
            Áreas de Práctica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios Jurídicos
          </h2>
          <p className="text-gray-600 text-lg">
            Contamos con abogados especializados listos para representarte con estrategia, claridad y responsabilidad jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-6 p-4 rounded-full bg-petrol-50 text-petrol-900 group-hover:bg-petrol-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6">
                  <span className="text-petrol-800 font-semibold text-sm group-hover:underline cursor-pointer inline-flex items-center">
                    Más información
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;