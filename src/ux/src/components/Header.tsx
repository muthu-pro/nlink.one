import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="group cursor-pointer">
            <h1 className="font-megrim text-xl text-white group-hover:text-gray-300 transition-colors duration-300">
              NLINK ONE
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;