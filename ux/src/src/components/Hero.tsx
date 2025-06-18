import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Removed NLINK ONE logo/text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="group relative bg-white/5 border border-white/20 rounded-xl p-6 overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white mb-4 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.25c-1.036 0-1.875.84-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5c1.036 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875Zm0 15H6.25c-1.036 0-1.875.84-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5c1.036 0 1.875-.84 1.875-1.875v-1.5c0-1.036-.84-1.875-1.875-1.875ZM19.75 3.75H17c-1.036 0-1.875.84-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5c1.036 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875Zm0 15H17c-1.036 0-1.875.84-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5c1.036 0 1.875-.84 1.875-1.875v-1.5c0-1.036-.84-1.875-1.875-1.875Z" />
                </svg>
                <h2 className="font-megrim text-2xl text-white mb-4 transition-colors duration-300">Card Title 1</h2>
                <p className="font-offside text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="px-4 py-2 border border-white text-white font-offside text-sm hover:bg-white hover:text-black transition-all duration-300">Learn More</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/5 border border-white/20 rounded-xl p-6 overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 to-teal-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white mb-4 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.979-.429-8.96-1.249M12 10.5a11.953 11.953 0 0 1-8.96-1.249m17.92 0c.11.324.21.652.3 0M12 10.5C12 12.884 12 21 12 21" />
                </svg>
                <h2 className="font-megrim text-2xl text-white mb-4 transition-colors duration-300">Card Title 2</h2>
                <p className="font-offside text-gray-300 text-sm mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="px-4 py-2 border border-white text-white font-offside text-sm hover:bg-white hover:text-black transition-all duration-300">Learn More</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/5 border border-white/20 rounded-xl p-6 overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white mb-4 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 6.429 5.25m11.142 4.5L21.75 12l-4.179 2.25m0-4.5 5.571-3 5.571 3m-11.142 0L21.75 7.5 17.571 5.25M12 21.75V12" />
                </svg>
                <h2 className="font-megrim text-2xl text-white mb-4 transition-colors duration-300">Card Title 3</h2>
                <p className="font-offside text-gray-300 text-sm mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className="px-4 py-2 border border-white text-white font-offside text-sm hover:bg-white hover:text-black transition-all duration-300">Learn More</button>
              </div>
            </div>
          </div>
          
          <p className="font-offside text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed mt-12">
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