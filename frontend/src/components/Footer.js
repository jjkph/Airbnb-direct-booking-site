import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-light)',
      padding: '80px 0 40px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          {/* About */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>
              Hollywood Sunset on the Water
            </h3>
            <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Experience unparalleled luxury in this exclusive waterfront retreat. 
              Where sophistication meets serenity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Overview', 'Gallery', 'Amenities', 'Reviews', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="body-small"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="mailto:your-email@example.com"
                className="body-small"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                your-email@example.com
              </a>
              <a 
                href="tel:+11234567890"
                className="body-small"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                +1 (123) 456-7890
              </a>
              <p className="body-small" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                Hollywood, FL
              </p>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '16px' }}>Book Your Stay</h4>
            <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Reserve directly for the best rates and personalized service.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('booking-widget');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ width: '100%' }}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-light)', margin: 0 }}>
            © {currentYear} Hollywood Sunset on the Water. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a 
              href="#privacy"
              className="body-small"
              style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms"
              className="body-small"
              style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
