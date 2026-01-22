import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="relative py-20 md:py-28 bg-petrol-900 text-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div>
            <span className="text-petrol-100 font-bold tracking-widest text-sm uppercase mb-2 block">
              Estamos para ayudarte
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Contáctanos y Recibe Asesoría Legal
            </h2>
            <p className="text-petrol-50 text-lg mb-12">
              Si enfrenta un conflicto legal, no deje pasar más tiempo. Agende una cita hoy mismo y permítanos defender sus intereses.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6 text-petrol-100" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Teléfonos</h4>
                  <a href={`tel:${CONTACT_INFO.phone1}`} className="block text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
                  <a href={`tel:${CONTACT_INFO.phone2}`} className="block text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.phone2}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-petrol-100" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Correo Electrónico</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block text-gray-300 hover:text-white transition-colors break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-petrol-100" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Ubicación</h4>
                  <p className="text-gray-300">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Clock className="w-6 h-6 text-petrol-100" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Horarios de Atención</h4>
                  <p className="text-gray-300">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-petrol-900 font-bold rounded hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto text-center"
              >
                Solicitar Cita por WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.347594513813!2d-103.4079146!3d25.5397023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdba895555555%3A0x1234567890abcdef!2sAv.%20Allende%205375%2C%20Villa%20California%2C%2027085%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1sen!2smx!4v1698765432100!5m2!1sen!2smx" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa de Ubicación MR & Asociados"
             ></iframe>
             <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md text-gray-800 text-xs font-semibold max-w-[150px] text-center">
               <span className="block text-petrol-600 mb-1">Torreón, Coahuila</span>
               Av. Allende 5375 Ote.
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;