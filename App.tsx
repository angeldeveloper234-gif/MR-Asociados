import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="font-sans text-luxury-white bg-luxury-black min-h-screen selection:bg-luxury-gold selection:text-black">
      <CustomCursor />
      <Navbar />
      
      {/* Main Content Wrapper - Z-Index 10 to scroll OVER the footer */}
      <div className="relative z-10 bg-luxury-black mb-[600px] shadow-2xl shadow-black">
        <Hero />
        <Services />
        <About />
        {/* Spacer for bottom aesthetic */}
        <div className="h-20 bg-luxury-black"></div>
      </div>

      {/* Footer - Fixed at bottom Z-0 */}
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default App;