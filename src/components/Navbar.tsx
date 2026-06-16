import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-effect fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="luxury-text text-3xl font-bold tracking-widest">
              AKAR
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">
              The Artisan Lab
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-smooth uppercase text-sm font-medium">
              Home
            </Link>
            <Link to="/customize" className="text-gray-300 hover:text-yellow-400 transition-smooth uppercase text-sm font-medium">
              Customize
            </Link>
            <Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition-smooth uppercase text-sm font-medium">
              Gallery
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-smooth uppercase text-sm font-medium">
              About
            </Link>
            <Link to="/orders" className="text-gray-300 hover:text-yellow-400 transition-smooth uppercase text-sm font-medium">
              My Orders
            </Link>
            <a href="mailto:tavisharun29@gmail.com" className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-smooth uppercase text-sm">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-yellow-400 hover:text-yellow-300"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg rounded-lg p-4 space-y-4 mb-4">
            <Link to="/" className="block text-gray-300 hover:text-yellow-400 transition-smooth">
              Home
            </Link>
            <Link to="/customize" className="block text-gray-300 hover:text-yellow-400 transition-smooth">
              Customize
            </Link>
            <Link to="/gallery" className="block text-gray-300 hover:text-yellow-400 transition-smooth">
              Gallery
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-yellow-400 transition-smooth">
              About
            </Link>
            <Link to="/orders" className="block text-gray-300 hover:text-yellow-400 transition-smooth">
              My Orders
            </Link>
            <a href="mailto:tavisharun29@gmail.com" className="block bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-smooth text-center">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
