import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-start"> {/* Changed justify-center to justify-start */}
          <div className="group cursor-pointer">
            <h1 className="font-megrim text-xl text-white transition-colors duration-300 hover:scale-110 hover:text-amber-300 transform-gpu animate-pulse-smooth"> {/* Added animation classes */}
              NL.O {/* Renamed text */}
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;