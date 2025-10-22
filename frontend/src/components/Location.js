import React, { useEffect, useRef } from 'react';

const Location = () => {
  const mapRef = useRef(null);
  const apiKey = "AIzaSyA6oM8ZrcqvbFsjZwfBDpkefMyEpreix54";
  
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (mapRef.current && window.google) {
        // Property location
        const propertyLocation = { lat: 26.0112, lng: -80.1495 };
        // Center shifted down to show more beach
        const mapCenter = { lat: 26.0180, lng: -80.1495 };
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: mapCenter,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });
        
        // Add marker at property location
        new window.google.maps.Marker({
          position: propertyLocation,
          map: map,
          title: 'Casa Caralago',
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#3b82f6',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3,
          }
        });
      }
    };
    
    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      document.head.appendChild(script);
    } else if (window.google && mapRef.current) {
      script.onload();
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [apiKey]);
  
  return (
    <div className="card" id="location">
      <h2>Location</h2>
      
      <div style={{
        marginBottom: '20px'
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#2c3e50',
          marginBottom: '8px'
        }}>
          Hollywood Lakes
        </div>
        <div style={{
          fontSize: '15px',
          color: '#555',
          marginBottom: '12px'
        }}>
          Hollywood, Florida
        </div>
        <div style={{
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '12px'
        }}>
          Located in Hollywood Lakes, this vacation home is 0.8 mi (1.3 km) from Hollywood Beach Golf Club and 2 mi (3.2 km) from Hollywood Beach. The ArtsPark at Young Circle and Hollywood Boulevard Historic Business District are also within 2 mi (3 km).
        </div>
        <div style={{
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          <strong>Minutes from the beach</strong> - Our waterfront property offers easy access to Hollywood Beach and the famous Broadwalk. Enjoy the perfect blend of serene waterfront living with quick access to beach activities.
        </div>
      </div>

      {/* Google Map */}
      <div 
        ref={mapRef}
        style={{
          width: '100%',
          height: '400px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #e5e7eb'
        }}
      ></div>
    </div>
  );
};

export default Location;