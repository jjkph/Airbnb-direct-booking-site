import React from 'react';

const Location = () => {
  const apiKey = "AIzaSyA6oM8ZrcqvbFsjZwfBDpkefMyEpreix54";
  // Center coordinates for the general Hollywood Beach area
  const lat = 26.0112;
  const lng = -80.1495;
  
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

      {/* Google Map */}
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
          src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=13&maptype=roadmap`}
          allowFullScreen
          title="Property Location - Hollywood Beach Area"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;