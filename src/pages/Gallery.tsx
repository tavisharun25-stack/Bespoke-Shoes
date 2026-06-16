import React from 'react';
import useShoeStore from '../store/useShoeStore';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const { templates } = useShoeStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Design Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of pre-designed templates or view completed custom orders. Get inspired and create your own masterpiece.
          </p>
        </div>

        {/* Templates Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="group glass-effect rounded-xl overflow-hidden hover:border-yellow-400 transition-smooth">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border-b border-yellow-600/20 relative overflow-hidden">
                  <div className="text-8xl group-hover:scale-110 transition-smooth">👟</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-gray-400 mb-4">{template.description}</p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-700 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Model:</span>
                      <span className="text-yellow-400 font-semibold">{template.shoeConfig.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Material:</span>
                      <span className="text-yellow-400 font-semibold">{template.shoeConfig.fabricOuter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Heel Height:</span>
                      <span className="text-yellow-400 font-semibold">{template.shoeConfig.heelHeight}</span>
                    </div>
                  </div>

                  <Link
                    to="/customize"
                    className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-smooth"
                  >
                    <span>Customize This</span>
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Orders Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Customer Showcases</h2>
          <div className="glass-effect p-12 rounded-xl text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Gallery Coming Soon</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As we craft beautiful custom shoes for our customers, we'll showcase the most stunning designs here. Each piece tells a story of artisanal craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
