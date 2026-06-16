import React from 'react';
import { Artisan } from '../types/shoe';
import { Award } from 'lucide-react';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden hover:border-yellow-400 transition-smooth">
      <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border-b border-yellow-600/20">
        <div className="text-6xl">👨‍🎨</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{artisan.name}</h3>
        <p className="text-yellow-400 text-sm font-semibold mb-4">{artisan.specialization}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{artisan.bio}</p>
        
        <div className="space-y-3 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Experience</span>
            <span className="text-yellow-400 font-semibold">{artisan.yearsOfExperience} years</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Shoes Crafted</span>
            <span className="text-yellow-400 font-semibold">{artisan.completedShoes}+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;
