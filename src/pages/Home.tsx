import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Zap, Crown } from 'lucide-react';

const Home = () => {
  const artisans = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      specialization: 'Formal Wear Specialist',
      yearsOfExperience: 15,
      bio: 'Master craftsman in traditional leather work with an eye for perfection.',
      completedShoes: 500,
    },
    {
      id: '2',
      name: 'Priya Sharma',
      specialization: 'Modern Design Expert',
      yearsOfExperience: 12,
      bio: 'Contemporary shoe designer blending comfort with cutting-edge aesthetics.',
      completedShoes: 450,
    },
    {
      id: '3',
      name: 'Amit Patel',
      specialization: 'Sustainable Materials Specialist',
      yearsOfExperience: 10,
      bio: 'Eco-conscious artisan pioneering sustainable luxury footwear.',
      completedShoes: 380,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="luxury-text">Design Your</span>
              <br />
              <span className="text-white">Perfect Shoe</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Luxury bespoke footwear crafted by master artisans in Nagpur. Choose your materials, size, heel height, and comfort level. We'll bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/customize"
                className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-smooth"
              >
                <span>Start Customizing</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600/10 px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-smooth"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Shoe Placeholder */}
        <div className="absolute right-0 top-32 w-96 h-96 opacity-10 hidden lg:block">
          <div className="text-9xl">👟</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose AKAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-8 rounded-xl text-center">
            <Crown size={48} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Luxury Quality</h3>
            <p className="text-gray-400">
              Premium materials including leather, suede, and sustainable options. Every shoe is a masterpiece.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center">
            <Leaf size={48} className="text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Sustainable</h3>
            <p className="text-gray-400">
              Eco-friendly materials including bamboo. Crafted with environmental responsibility.
            </p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center">
            <Zap size={48} className="text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Custom-Made</h3>
            <p className="text-gray-400">
              Every pair is made specifically for you. 7-15 days with real-time progress updates.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-yellow-600/5">
        <h2 className="text-4xl font-bold text-center mb-16">Endless Customization</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: '👟', label: 'Shoe Type' },
            { icon: '📏', label: 'Size & Width' },
            { icon: '🧵', label: 'Materials' },
            { icon: '🎨', label: 'Colors' },
            { icon: '⬆️', label: 'Heel Height' },
            { icon: '🛟', label: 'Comfort Level' },
          ].map((item, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg text-center hover:border-yellow-400 transition-smooth">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-white font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Your Journey with AKAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Design', desc: 'Customize every detail of your shoe' },
            { step: '2', title: 'Confirm', desc: 'Review and approve your design' },
            { step: '3', title: 'Craft', desc: '7-15 days handcrafted by artisans' },
            { step: '4', title: 'Receive', desc: 'Your perfect shoes delivered' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-black rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Meet Our Artisans</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Master craftspeople with decades of combined experience, dedicated to creating shoes that fit your feet and your lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="glass-effect rounded-xl overflow-hidden hover:border-yellow-400 transition-smooth">
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border-b border-yellow-600/20 text-6xl">
                👨‍🎨
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{artisan.name}</h3>
                <p className="text-yellow-400 text-sm font-semibold mb-4">{artisan.specialization}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{artisan.bio}</p>
                <div className="space-y-2 pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-yellow-400 font-semibold">{artisan.yearsOfExperience} years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shoes Crafted</span>
                    <span className="text-yellow-400 font-semibold">{artisan.completedShoes}+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="glass-effect p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Design Your Perfect Shoe?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your bespoke shoe journey today. Choose your materials, size, and comfort level, and let our artisans bring your vision to life.
          </p>
          <Link
            to="/customize"
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-smooth"
          >
            Start Customizing Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
