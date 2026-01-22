import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-14 h-14 bg-luxury-gold hover:bg-white text-black rounded-full shadow-lg shadow-luxury-gold/20 transition-all duration-300 transform hover:scale-110 group hover-trigger"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;