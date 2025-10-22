import React from 'react';

const Overview = () => {
  return (
    <div className="card">
      <h2>Overview</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px'
      }}>
        <div style={{
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Location</div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>Hollywood, FL</div>
        </div>

        <div style={{
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Type</div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>Entire Home</div>
        </div>

        <div style={{
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Bedrooms</div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>3</div>
        </div>

        <div style={{
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Bathrooms</div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;