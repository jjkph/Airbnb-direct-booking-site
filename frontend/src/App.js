import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroGallery from './components/HeroGallery';
import BookingWidget from './components/BookingWidget';
import Description from './components/Description';
import Overview from './components/Overview';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Location from './components/Location';
import AboutHost from './components/AboutHost';
import ThingsToKnow from './components/ThingsToKnow';

function App() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Try multiple approaches for better mobile compatibility
    const bookingWidget = document.getElementById('booking-widget');
    
    if (bookingWidget) {
      // Get the position of the element
      const rect = bookingWidget.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 80; // 80px offset for header
      
      // Scroll to position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <HeroGallery />
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 450px', 
          gap: '24px', 
          marginTop: '24px',
          marginBottom: '48px',
          alignItems: 'start',
          overflow: 'visible'
        }}
        className="main-layout"
        >
          <div>
            <Description />
            <Overview />
            <Features />
            <Reviews />
            <Location />
            <ContactUs />
            <ThingsToKnow />
          </div>
          <div style={{ height: '100%', minHeight: '3000px', overflow: 'visible' }}>
            <BookingWidget />
          </div>
        </div>
      </div>
      
      {/* Mobile Floating Check Availability Button */}
      <div className="mobile-check-availability">
        <button 
          onClick={scrollToBooking}
          type="button"
          aria-label="Check Availability"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default App;