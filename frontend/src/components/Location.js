import React from 'react';

const Location = () => {
  const apiKey = "AIzaSyA6oM8ZrcqvbFsjZwfBDpkefMyEpreix54";
  // Property coordinates
  const propertyLat = 26.0112;
  const propertyLng = -80.1495;
  // Center coordinates shifted down to show more of the beach/ocean
  const centerLat = 26.0180;
  const centerLng = -80.1495;
  
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
          Hollywood Waterfront District
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
          lineHeight: '1.6'
        }}>
          <strong>Minutes from the beach</strong> - Our waterfront property offers easy access to Hollywood Beach and the famous Broadwalk. Enjoy the perfect blend of serene waterfront living with quick access to beach activities.
        </div>
      </div>

      {/* Google Map with marker */}
      <div style={{
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb'
      }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${centerLat},${centerLng}&zoom=13&maptype=roadmap`}
          allowFullScreen
          title="Property Location - Hollywood Beach Area"
        ></iframe>
        {/* Marker overlay */}
        <div style={{
          position: 'relative',
          marginTop: '-200px',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#3b82f6"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -100%)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Location;