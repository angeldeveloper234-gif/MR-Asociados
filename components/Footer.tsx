import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="fixed bottom-0 left-0 w-full h-[600px] bg-[#0a0a0a] text-luxury-white z-0 flex flex-col justify-between pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      
      <div className="container mx-auto h-full flex flex-col justify-between">
        
        {/* Massive Call to Action */}
        <div className="max-w-4xl">
           <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
             PROTEGEMOS <br/> 
             <span className="text-luxury-gold">SUS INTERESES.</span> <br/>
             AGENDE HOY.
           </h2>
           <a 
             href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
             target="_blank"
             rel="noopener noreferrer"
             className="hover-trigger inline-block border-b border-luxury-white/30 hover:border-luxury-gold text-xl hover:text-luxury-gold transition-all pb-1"
           >
             Iniciar conversación &rarr;
           </a>
        </div>

        {/* Info Columns */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          <div className="flex flex-col gap-4 font-sans text-sm text-luxury-muted">
            <h4 className="text-white uppercase tracking-widest text-xs mb-2">Contacto</h4>
            <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
          </div>

          <div className="flex flex-col gap-4 font-sans text-sm text-luxury-muted max-w-xs">
            <h4 className="text-white uppercase tracking-widest text-xs mb-2">Ubicación</h4>
            <p>{CONTACT_INFO.address}</p>
          </div>

          <div className="flex flex-col gap-4 font-sans text-sm text-luxury-muted text-right">
            <div className="flex gap-4 mb-2">
              <a href="#" className="hover:text-luxury-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">Facebook</a>
            </div>
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              © 2026 MR & Asociados. <br/> All Rights Reserved.
            </p>
          </div>

        </div>

        {/* Large Background Year */}
        <div className="absolute bottom-[-5%] right-[-5%] font-serif text-[20vw] leading-none text-white/5 pointer-events-none select-none z-[-1]">
          2026
        </div>

      </div>
    </footer>
  );
};

export default Footer;