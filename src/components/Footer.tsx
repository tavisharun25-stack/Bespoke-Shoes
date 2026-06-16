import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-600/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="luxury-text text-2xl font-bold mb-4">AKAR</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Luxury bespoke shoes crafted by artisans who understand that perfect fit is personal.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition-smooth">Home</a></li>
              <li><a href="/customize" className="hover:text-yellow-400 transition-smooth">Customize</a></li>
              <li><a href="/gallery" className="hover:text-yellow-400 transition-smooth">Gallery</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-smooth">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-yellow-400 transition-smooth">About Artisans</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-smooth">Sustainability</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-smooth">Materials</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-smooth">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-400" />
                <span>Nagpur, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400" />
                <a href="mailto:tavisharun29@gmail.com" className="hover:text-yellow-400 transition-smooth">
                  tavisharun29@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 AKAR | THE ARTISAN LAB. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-smooth text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-smooth text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-smooth text-sm">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
