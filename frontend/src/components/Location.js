import React from 'react';

const Location = () => {
  const address = "920 N 11th Ct, Hollywood, FL 33019";
  const apiKey = "AIzaSyA6oM8ZrcqvbFsjZwfBDpkefMyEpreix54";
  
  return (
    <div className="card" id="location">
      <h2>Location</h2>
      
      <div style={{
        marginBottom: '20px'
      }}>
        <div style={{
          fontSize: '14px',
          color: '#999',
          marginBottom: '8px'
        }}>Address</div>
        <div style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#2c3e50',
          marginBottom: '4px'
        }}>
          Hollywood Waterfront District
        </div>
        <div style={{
          fontSize: '15px',
          color: '#555'
        }}>
          Hollywood, Florida
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
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=15`}
          allowFullScreen
          title="Property Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;