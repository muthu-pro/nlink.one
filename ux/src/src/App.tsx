import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import SatelliteTracker from './components/SatelliteTracker';
import SpaceBackground from './components/SpaceBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        <SatelliteTracker />
      </main>
    </div>
  );
}

export default App;