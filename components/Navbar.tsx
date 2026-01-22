import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-petrol-900 text-white' : 'bg-white/90 text-petrol-900'}`}>
              <Scale className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-wide ${scrolled ? 'text-petrol-900' : 'text-white'}`}>
                MR & Asociados
              </span>
              <span className={`text-[0.65rem] tracking-widest uppercase ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Despacho Legal
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:text-petrol-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className={`px-5 py-2 rounded-md font-semibold text-sm transition-all ${
                scrolled 
                  ? 'bg-petrol-900 text-white hover:bg-petrol-800' 
                  : 'bg-white text-petrol-900 hover:bg-gray-100'
              }`}
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium py-2 px-4 hover:bg-petrol-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-petrol-900 text-white text-center py-3 rounded-lg font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consultoría
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;