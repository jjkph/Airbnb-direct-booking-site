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
import ContactUs from './components/ContactUs';
import ThingsToKnow from './components/ThingsToKnow';

function App() {
  const scrollToBooking = () => {
    const bookingWidget = document.getElementById('booking-widget');
    if (bookingWidget) {
      bookingWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="App">
      <Header />
      <HeroGallery />
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 400px', 
          gap: '24px', 
          marginTop: '24px',
          marginBottom: '48px'
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
          <div>
            <BookingWidget />
          </div>
        </div>
      </div>
      
      {/* Mobile Floating Check Availability Button */}
      <div className="mobile-check-availability">
        <button onClick={scrollToBooking}>
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default App;