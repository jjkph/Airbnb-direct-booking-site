import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navigation-header" style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none' }}>
      <div className="navigation-content">
        <a href="#home" className="navigation-logo">
          Hollywood Sunset on the Water
        </a>
        <nav>
          <ul className="navigation-menu">
            <li>
              <button className="navigation-link" onClick={() => scrollToSection('overview')}>
                Overview
              </button>
            </li>
            <li>
              <button className="navigation-link" onClick={() => scrollToSection('gallery')}>
                Gallery
              </button>
            </li>
            <li>
              <button className="navigation-link" onClick={() => scrollToSection('amenities')}>
                Amenities
              </button>
            </li>
            <li>
              <button className="navigation-link" onClick={() => scrollToSection('reviews')}>
                Reviews
              </button>
            </li>
            <li>
              <button className="navigation-link" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;