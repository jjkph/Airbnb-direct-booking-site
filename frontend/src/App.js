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
    </div>
  );
}

export default App;