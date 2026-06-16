import React from 'react';
import { MapPin, Mail, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">About AKAR</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            THE ARTISAN LAB - Where tradition meets innovation in bespoke luxury footwear
          </p>
        </div>

        {/* Our Story */}
        <div className="glass-effect p-12 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                AKAR was born from a simple belief: everyone deserves shoes that fit perfectly and reflect their unique style. In Nagpur, a city rich with artisan heritage, we brought together master craftspeople who are passionate about their craft.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Each pair of shoes we create tells a story. It's a collaboration between our customers, who dream up their perfect shoe, and our artisans, who bring those dreams to life with precision and care.
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We believe in sustainability without compromising luxury. That's why we offer eco-friendly materials like bamboo alongside premium leather, giving our customers choices that align with their values.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From the moment you customize your shoe to the day it arrives at your door, every step is handled with the utmost care and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="glass-effect p-12 rounded-xl mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <MapPin size={32} className="text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold text-white">Our Location</h2>
            </div>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            🏛️ Nagpur, India
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nagpur has been a center of skilled craftsmanship for centuries. Our atelier is located here, where our team of artisans works meticulously to create each pair of custom shoes. This is where tradition meets modern luxury.
          </p>
        </div>

        {/* Contact Section */}
        <div className="glass-effect p-12 rounded-xl mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <Mail size={32} className="text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Have questions about our shoes, materials, or the customization process? We'd love to hear from you!
          </p>
          <a
            href="mailto:tavisharun29@gmail.com"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-smooth"
          >
            Email Us
          </a>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl text-center">
              <Award size={40} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Craftsmanship</h3>
              <p className="text-gray-400">
                Every shoe is handcrafted with precision and care. Our artisans bring decades of experience to each piece.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-4xl mx-auto mb-4">♻️</div>
              <h3 className="text-xl font-bold text-white mb-3">Sustainability</h3>
              <p className="text-gray-400">
                We're committed to eco-friendly practices and materials. Luxury doesn't have to come at the cost of the planet.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-4xl mx-auto mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">Individuality</h3>
              <p className="text-gray-400">
                Your shoes should be as unique as you are. We celebrate personal style and comfort preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="glass-effect p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Customize', desc: 'Choose your style, materials, and preferences' },
              { step: '2', title: 'Confirm', desc: 'Review your design with our team' },
              { step: '3', title: 'Craft', desc: '7-15 days of artisan craftsmanship' },
              { step: '4', title: 'Deliver', desc: 'Receive your perfect shoes' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-yellow-600 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
