import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4 bg-luxury-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#inicio" className="hover-trigger relative group z-50">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-luxury-white">
              MR <span className="text-luxury-gold">&</span> ASOCIADOS
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-luxury-muted group-hover:text-white transition-colors">
              Despacho Legal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {['Servicios', 'Firma', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover-trigger text-xs font-bold uppercase tracking-widest text-luxury-white/70 hover:text-luxury-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover-trigger text-luxury-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-luxury-black z-40 flex items-center justify-center transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-8 text-center">
            {['Inicio', 'Servicios', 'Firma', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-serif text-4xl text-luxury-white hover:text-luxury-gold transition-colors hover:italic"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;