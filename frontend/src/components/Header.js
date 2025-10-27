import React from 'react';

const Header = () => {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_casa-caralago/artifacts/wb4u5w16_Jade%20Key%20Logo%20-%20Keys%20Only.jpg"
            alt="Casa Caralago Logo"
            style={{
              height: '30px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>
            Casa Caralago
          </div>
        </div>
        <nav 
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          <a 
            href="#photos" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              color: '#555',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.target.style.color = '#555'}
          >
            Photos
          </a>
          <a 
            href="#reviews" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: '#555',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.target.style.color = '#555'}
          >
            Reviews
          </a>
          <a 
            href="#location" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: '#555',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.target.style.color = '#555'}
          >
            Location
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: '#555',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
            onMouseLeave={(e) => e.target.style.color = '#555'}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;