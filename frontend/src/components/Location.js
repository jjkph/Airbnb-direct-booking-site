import React from 'react';

const Location = () => {
  return (
    <div className="card">
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

      {/* Map Placeholder */}
      <div style={{
        width: '100%',
        height: '300px',
        background: '#e5e7eb',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" style={{ marginBottom: '8px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div>Map View</div>
        </div>
      </div>

      <a 
        href="https://maps.google.com/?q=Hollywood+FL"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{
          width: '100%',
          textAlign: 'center',
          display: 'block',
          textDecoration: 'none'
        }}
      >
        Get Directions
      </a>
    </div>
  );
};

export default Location;