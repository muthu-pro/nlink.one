import React, { useState, useEffect } from 'react';
import { Satellite, MapPin, Clock } from 'lucide-react';

interface SatelliteData {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  azimuth: number;
  elevation: number;
}

const SatelliteTracker = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [satellites, setSatellites] = useState<SatelliteData[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock satellite data - in production, this would come from a real API like N2YO or similar
  const mockSatellites: SatelliteData[] = [
    {
      id: 'ISS',
      name: 'International Space Station',
      latitude: 0,
      longitude: 0,
      altitude: 408,
      velocity: 27600,
      azimuth: 0,
      elevation: 0
    },
    {
      id: 'HUBBLE',
      name: 'Hubble Space Telescope',
      latitude: 0,
      longitude: 0,
      altitude: 547,
      velocity: 27300,
      azimuth: 0,
      elevation: 0
    },
    {
      id: 'STARLINK-1',
      name: 'Starlink-1007',
      latitude: 0,
      longitude: 0,
      altitude: 550,
      velocity: 27000,
      azimuth: 0,
      elevation: 0
    }
  ];

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied, using default location');
          setUserLocation({ lat: 40.7128, lng: -74.0060 }); // Default to NYC
        }
      );
    } else {
      setUserLocation({ lat: 40.7128, lng: -74.0060 }); // Default to NYC
    }
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate satellite movement
  useEffect(() => {
    if (!userLocation) return;

    const updateSatellites = () => {
      const time = Date.now() / 1000;
      
      const updatedSatellites = mockSatellites.map((sat, index) => {
        // Simulate orbital movement
        const orbitalPeriod = 90 + index * 5; // minutes
        const angle = (time / (orbitalPeriod * 60)) * 2 * Math.PI;
        
        const latitude = Math.sin(angle + index) * 60; // Vary inclination
        const longitude = ((time / (orbitalPeriod * 60)) * 360 + index * 120) % 360 - 180;
        
        // Calculate relative position to user
        const deltaLat = latitude - userLocation.lat;
        const deltaLng = longitude - userLocation.lng;
        
        const azimuth = (Math.atan2(deltaLng, deltaLat) * 180 / Math.PI + 360) % 360;
        const distance = Math.sqrt(deltaLat * deltaLat + deltaLng * deltaLng);
        const elevation = Math.max(0, 90 - distance * 2); // Simplified elevation calculation
        
        return {
          ...sat,
          latitude,
          longitude,
          azimuth,
          elevation
        };
      });
      
      setSatellites(updatedSatellites);
    };

    updateSatellites();
    const interval = setInterval(updateSatellites, 2000); // Update every 2 seconds
    
    return () => clearInterval(interval);
  }, [userLocation]);

  const formatCoordinate = (coord: number, type: 'lat' | 'lng') => {
    const abs = Math.abs(coord);
    const direction = type === 'lat' ? (coord >= 0 ? 'N' : 'S') : (coord >= 0 ? 'E' : 'W');
    return `${abs.toFixed(4)}° ${direction}`;
  };

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-megrim text-4xl md:text-6xl text-white mb-4">
            SATELLITE TRACKING
          </h2>
          <p className="font-offside text-gray-400 max-w-2xl mx-auto">
            Real-time orbital tracking from your current location
          </p>
        </div>

        {/* Location Info */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-offside text-white">Your Location</span>
              </div>
              {userLocation ? (
                <div className="font-offside text-sm text-gray-300">
                  <div>{formatCoordinate(userLocation.lat, 'lat')}</div>
                  <div>{formatCoordinate(userLocation.lng, 'lng')}</div>
                </div>
              ) : (
                <div className="font-offside text-sm text-gray-400">Locating...</div>
              )}
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="font-offside text-white">UTC Time</span>
              </div>
              <div className="font-offside text-sm text-gray-300">
                {currentTime.toUTCString().split(' ')[4]}
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Satellite className="w-5 h-5 text-white" />
                <span className="font-offside text-white">Tracking</span>
              </div>
              <div className="font-offside text-sm text-gray-300">
                {satellites.length} Satellites
              </div>
            </div>
          </div>
        </div>

        {/* Satellite Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-square max-w-2xl mx-auto mb-8">
            {/* Sky dome background */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-gradient-to-b from-transparent to-white/5">
              {/* Elevation circles */}
              <div className="absolute inset-[10%] rounded-full border border-white/10"></div>
              <div className="absolute inset-[30%] rounded-full border border-white/10"></div>
              <div className="absolute inset-[50%] rounded-full border border-white/10"></div>
              
              {/* Cardinal directions */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                <span className="font-offside text-xs text-white">N</span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                <span className="font-offside text-xs text-white">S</span>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6">
                <span className="font-offside text-xs text-white">W</span>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6">
                <span className="font-offside text-xs text-white">E</span>
              </div>

              {/* Satellites */}
              {satellites.map((satellite) => {
                const azimuthRad = (satellite.azimuth * Math.PI) / 180;
                const elevationFactor = satellite.elevation / 90;
                const radius = (1 - elevationFactor) * 45; // 45% is the outer ring
                
                const x = 50 + radius * Math.sin(azimuthRad);
                const y = 50 - radius * Math.cos(azimuthRad);
                
                return (
                  <div
                    key={satellite.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-30"></div>
                      
                      {/* Satellite trail */}
                      <div 
                        className="absolute w-8 h-0.5 bg-gradient-to-r from-white/60 to-transparent transform -translate-y-1/2"
                        style={{
                          transform: `rotate(${satellite.azimuth}deg) translateY(-50%)`,
                          transformOrigin: 'left center'
                        }}
                      ></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-xs font-offside text-white whitespace-nowrap">
                        <div className="font-medium mb-1">{satellite.name}</div>
                        <div>Alt: {satellite.altitude}km</div>
                        <div>Vel: {(satellite.velocity / 1000).toFixed(1)}km/s</div>
                        <div>Az: {satellite.azimuth.toFixed(1)}°</div>
                        <div>El: {satellite.elevation.toFixed(1)}°</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Satellite List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {satellites.map((satellite) => (
              <div
                key={satellite.id}
                className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-offside text-white font-medium">{satellite.name}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs font-offside text-gray-300">
                  <div>Altitude: {satellite.altitude}km</div>
                  <div>Velocity: {(satellite.velocity / 1000).toFixed(1)}km/s</div>
                  <div>Azimuth: {satellite.azimuth.toFixed(1)}°</div>
                  <div>Elevation: {satellite.elevation.toFixed(1)}°</div>
                </div>
                
                <div className="mt-2 text-xs font-offside">
                  <span className={`px-2 py-1 rounded-full ${
                    satellite.elevation > 10 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-600/20 text-gray-400'
                  }`}>
                    {satellite.elevation > 10 ? 'Visible' : 'Below Horizon'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteTracker;