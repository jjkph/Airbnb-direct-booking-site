import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Load iGMS widget script
    const script = document.createElement('script');
    script.src = '//www.igms.com/app/widgets/direct-booking/widget.js?v=12-53874';
    script.type = 'application/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="home" style={{
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ padding: '80px 40px' }}>
        <div className="grid-two-column" style={{ gap: '80px' }}>
          {/* Left: Hero Image & Content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              overflow: 'hidden',
              marginBottom: '32px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1759020623226-73ec7a068b11"
                alt="Hollywood Sunset on the Water - Luxury Waterfront Property"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h1 className="hero-large" style={{ marginBottom: '24px' }}>
              Your Private Waterfront Retreat
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Experience unparalleled luxury on the water. Wake up to breathtaking sunsets, 
              enjoy world-class amenities, and create unforgettable memories in this exclusive 
              Hollywood waterfront property.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary"
                onClick={() => {
                  const element = document.getElementById('booking-widget');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Stay
              </button>
              <button 
                className="btn-secondary"
                onClick={() => {
                  const element = document.getElementById('gallery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Gallery
              </button>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div id="booking-widget" style={{
              background: 'white',
              padding: '48px 40px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              width: '100%',
              maxWidth: '500px'
            }}>
              <h2 className="heading-2" style={{ marginBottom: '24px', textAlign: 'center' }}>
                Reserve Your Dates
              </h2>
              <p className="body-small" style={{ 
                textAlign: 'center', 
                marginBottom: '32px',
                color: 'var(--text-secondary)'
              }}>
                Check availability and book directly for the best rates
              </p>
              
              {/* iGMS Booking Widget */}
              <div
                className="igms-direct-booking-widget"
                id="directBooking1761143310578"
                data-listing-id="d9dc4160-f346-4f50-92d1-e3583fbe19fa"
                data-widget-color="#333333"
                data-text-check-availability="Check Availability"
                data-text-book-now="Book Now"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;