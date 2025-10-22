import React from 'react';

const Features = () => {
  const features = [
    'Air Conditioning',
    'Heating',
    'WiFi',
    'TV Cable',
    'Kitchen',
    'Microwave',
    'Dishwasher',
    'Washer & Dryer',
    'Parking',
    'Pool',
    'Hot Tub',
    'Balcony'
  ];

  return (
    <div className="card">
      <h2>Features</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
      }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              background: '#f9fafb',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;