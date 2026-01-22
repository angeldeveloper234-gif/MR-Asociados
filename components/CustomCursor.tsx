import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    document.addEventListener('mousemove', onMouseMove);

    // Attach listeners to interactive elements
    const links = document.querySelectorAll('a, button, .hover-trigger');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Dot - Hidden on Mobile */}
      <div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-luxury-gold rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${hovered ? 0 : 1})`
        }}
      />
      
      {/* View Circle / Ring - Hidden on Mobile */}
      <div
        className={`hidden md:flex fixed top-0 left-0 items-center justify-center rounded-full pointer-events-none z-[100] border border-luxury-gold/50 transition-all duration-300 ease-out`}
        style={{
          transform: `translate3d(${position.x - (hovered ? 40 : 16)}px, ${position.y - (hovered ? 40 : 16)}px, 0)`,
          width: hovered ? '80px' : '32px',
          height: hovered ? '80px' : '32px',
          backgroundColor: hovered ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          backdropFilter: hovered ? 'blur(2px)' : 'none'
        }}
      >
        <span className={`text-[10px] font-bold text-luxury-gold tracking-widest transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          VIEW
        </span>
      </div>
    </>
  );
};

export default CustomCursor;