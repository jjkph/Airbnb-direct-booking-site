import React from 'react';

const PropertyOverview = () => {
  return (
    <section id="overview" style={{
      background: 'var(--bg-secondary)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div className="grid-two-column" style={{ gap: '80px' }}>
          <div>
            <h2 className="heading-1" style={{ marginBottom: '32px' }}>
              A Haven of Tranquility & Elegance
            </h2>
            <p className="body-large" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
              Nestled along the pristine waterfront, Hollywood Sunset on the Water offers an 
              extraordinary escape where luxury meets natural beauty. This meticulously designed 
              property combines sophisticated comfort with breathtaking views.
            </p>
            <p className="body-regular" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
              Every detail has been thoughtfully curated to provide you with an unforgettable 
              experience. From the moment you arrive, you'll be captivated by the seamless 
              blend of indoor-outdoor living, premium furnishings, and panoramic water vistas.
            </p>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              Whether you're seeking a romantic getaway, a family vacation, or a peaceful 
              retreat, our property offers the perfect sanctuary to relax, rejuvenate, and 
              reconnect with what matters most.
            </p>
          </div>
          
          <div>
            <div style={{
              background: 'white',
              padding: '48px',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-2" style={{ marginBottom: '32px' }}>Property Highlights</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>🏡</span>
                    </div>
                    <h4 className="heading-3" style={{ margin: 0 }}>Spacious Accommodations</h4>
                  </div>
                  <p className="body-small" style={{ marginLeft: '52px' }}>
                    [Number] bedrooms, [Number] bathrooms • Sleeps [Number] guests comfortably
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>🌅</span>
                    </div>
                    <h4 className="heading-3" style={{ margin: 0 }}>Waterfront Views</h4>
                  </div>
                  <p className="body-small" style={{ marginLeft: '52px' }}>
                    Direct water access with stunning sunset views from every room
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>✨</span>
                    </div>
                    <h4 className="heading-3" style={{ margin: 0 }}>Premium Amenities</h4>
                  </div>
                  <p className="body-small" style={{ marginLeft: '52px' }}>
                    Resort-style pool, spa, gourmet kitchen, and entertainment areas
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>📍</span>
                    </div>
                    <h4 className="heading-3" style={{ margin: 0 }}>Prime Location</h4>
                  </div>
                  <p className="body-small" style={{ marginLeft: '52px' }}>
                    Minutes from dining, shopping, and Hollywood's finest attractions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;