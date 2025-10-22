import React from 'react';

const Amenities = () => {
  const amenitiesList = [
    {
      category: 'Comfort & Relaxation',
      items: [
        'King-size beds with premium linens',
        'Central air conditioning & heating',
        'High-speed WiFi throughout',
        'Smart TVs in all rooms',
        'Washer and dryer'
      ]
    },
    {
      category: 'Kitchen & Dining',
      items: [
        'Fully equipped gourmet kitchen',
        'Stainless steel appliances',
        'Coffee maker & espresso machine',
        'Dining table for [Number] guests',
        'Outdoor BBQ grill'
      ]
    },
    {
      category: 'Outdoor & Recreation',
      items: [
        'Private waterfront access',
        'Heated swimming pool',
        'Hot tub & spa',
        'Outdoor lounge areas',
        'Dock with boat access'
      ]
    },
    {
      category: 'Luxury Touches',
      items: [
        'Concierge service available',
        'Beach chairs & umbrellas',
        'Towels & pool floats',
        'Private parking',
        'Security system'
      ]
    }
  ];

  return (
    <section id="amenities" style={{
      background: 'var(--bg-secondary)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-1">World-Class Amenities</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Every comfort and convenience at your fingertips
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {amenitiesList.map((amenity, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '40px 32px',
                border: '1px solid var(--border-light)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="hover-lift"
            >
              <h3 className="heading-3" style={{ 
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-light)'
              }}>
                {amenity.category}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {amenity.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--text-primary)',
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></span>
                    <span className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '80px',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '48px',
            border: '1px solid var(--border-light)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Guest Services</h3>
            <p className="body-regular" style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '32px'
            }}>
              We're committed to making your stay exceptional. Our team is available to assist 
              with restaurant reservations, activity bookings, transportation arrangements, and 
              any special requests to enhance your experience.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;