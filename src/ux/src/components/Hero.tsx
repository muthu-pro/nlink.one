import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-megrim text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
            NLINK ONE
          </h1>
          
          <p className="font-offside text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transcend the boundaries of conventional connectivity
          </p>
          
          <button className="px-8 py-3 border border-white text-white font-offside hover:bg-white hover:text-black transition-all duration-300">
            Launch Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;