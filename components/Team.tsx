import React, { useState } from 'react';
import { TEAM } from '../constants';
import { User } from 'lucide-react';

const TeamCard: React.FC<{ member: typeof TEAM[0] }> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
        {!imgError ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <User className="w-20 h-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-petrol-100 text-sm tracking-wider uppercase font-medium">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-petrol-800 font-bold tracking-widest text-sm uppercase mb-2 block">
            Profesionales
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Equipo Legal
          </h2>
          <p className="text-gray-600 text-lg">
            Abogados con amplia experiencia y compromiso ético para brindarle la mejor representación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;