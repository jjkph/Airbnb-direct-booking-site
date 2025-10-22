import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import PropertyOverview from './components/PropertyOverview';
import PhotoGallery from './components/PhotoGallery';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <PropertyOverview />
      <PhotoGallery />
      <Amenities />
      <Reviews />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;