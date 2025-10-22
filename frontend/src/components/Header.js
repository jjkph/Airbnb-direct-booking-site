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
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            HS
          </div>
          <span style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>
            Hollywood Sunset
          </span>
        </div>
        <nav style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }}>
          <a href="#home" style={{
            color: '#555',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}>Home</a>
          <a href="#properties" style={{
            color: '#555',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}>Properties</a>
          <a href="#contact" style={{
            color: '#555',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;