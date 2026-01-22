import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-serif text-xl font-bold mb-1">MR & Asociados</h3>
            <p className="text-sm">Soluciones legales estratégicas.</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="text-center md:text-right text-xs">
            <p>&copy; {new Date().getFullYear()} MR & Asociados.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;