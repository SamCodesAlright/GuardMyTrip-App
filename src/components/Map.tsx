import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MapPin, Users, AlertTriangle } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  // Sample data for Northeast India locations
  const locations = [
    { id: 1, name: "Guwahati, Assam", lat: 26.1445, lng: 91.7362, type: "safe", tourists: 42, volunteers: 18 },
    { id: 2, name: "Itanagar, Arunachal Pradesh", lat: 27.0844, lng: 93.6053, type: "moderate", tourists: 23, volunteers: 8 },
    { id: 3, name: "Kohima, Nagaland", lat: 25.6751, lng: 94.1086, type: "safe", tourists: 31, volunteers: 12 },
    { id: 4, name: "Imphal, Manipur", lat: 24.8170, lng: 93.9368, type: "safe", tourists: 28, volunteers: 14 },
    { id: 5, name: "Aizawl, Mizoram", lat: 23.7307, lng: 92.7173, type: "moderate", tourists: 19, volunteers: 6 },
    { id: 6, name: "Agartala, Tripura", lat: 23.8315, lng: 91.2868, type: "safe", tourists: 35, volunteers: 15 },
    { id: 7, name: "Shillong, Meghalaya", lat: 25.5788, lng: 91.8933, type: "safe", tourists: 48, volunteers: 20 },
    { id: 8, name: "Gangtok, Sikkim", lat: 27.3389, lng: 88.6065, type: "safe", tourists: 52, volunteers: 22 },
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    // Dynamic import to avoid issues if mapbox-gl is not available
    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = mapboxToken;
      
      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [92.0, 25.5], // Center of Northeast India
        zoom: 6.5,
      });

      // Add navigation controls
      map.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add markers for each location
      locations.forEach((location) => {
        const color = location.type === 'safe' ? '#10b981' : 
                     location.type === 'moderate' ? '#f59e0b' : '#ef4444';

        // Create custom marker
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.backgroundColor = color;
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

        // Add popup
        const popup = new mapboxgl.default.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-semibold text-sm">${location.name}</h3>
            <p class="text-xs text-gray-600">Tourists: ${location.tourists}</p>
            <p class="text-xs text-gray-600">Volunteers: ${location.volunteers}</p>
            <p class="text-xs font-medium ${location.type === 'safe' ? 'text-green-600' : 
              location.type === 'moderate' ? 'text-yellow-600' : 'text-red-600'}">
              ${location.type.toUpperCase()}
            </p>
          </div>
        `);

        new mapboxgl.default.Marker(el)
          .setLngLat([location.lng, location.lat])
          .setPopup(popup)
          .addTo(map);
      });

      return () => map.remove();
    }).catch(() => {
      console.log('Mapbox GL not available');
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      setTimeout(() => initializeMap(), 100);
    }
  };

  if (!isTokenSet) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Northeast India Safety Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
              <Input
                id="mapbox-token"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1IjoieW91dXNlcm5hbWUi..."
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Get your free token from{' '}
                <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  mapbox.com
                </a>
              </p>
            </div>
            <Button type="submit" className="w-full">
              Load Map
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full h-full">
      {/* Map Container */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-4">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <h3 className="font-semibold text-sm mb-2">Live Safety Status</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Safe Zones</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Moderate Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Restricted Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location) => (
          <Card key={location.id} className="safety-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{location.name}</h4>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  location.type === 'safe' ? 'bg-green-100 text-green-800' :
                  location.type === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {location.type}
                </div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{location.tourists} tourists</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location.volunteers} volunteers</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Map;