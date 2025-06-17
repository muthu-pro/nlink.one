import React from 'react';
import { Satellite } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center animate-pulse">
            <Satellite className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
        
        <h1 className="font-megrim text-4xl md:text-6xl text-white mb-4">
          NLINK ONE
        </h1>
        
        <p className="font-offside text-gray-400">
          Initializing Connection...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;