import React from 'react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Minimal stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground;