import React, { useEffect } from 'react';

const BookingWidget = () => {
  useEffect(() => {
    // Load iGMS widget script if not already loaded
    if (!document.querySelector('script[src*="igms.com"]')) {
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
    }
  }, []);

  return (
    <div 
      id="booking-widget"
      style={{
        position: 'sticky',
        top: '90px',
        alignSelf: 'flex-start'
      }}
    >
      <div className="card" style={{
        padding: '24px'
      }}>
        <h3 style={{ marginBottom: '20px', fontSize: '20px' }}>Book Your Stay</h3>
        
        {/* iGMS Booking Widget */}
        <div
          className="igms-direct-booking-widget"
          id="directBooking1761143310578"
          data-listing-id="d9dc4160-f346-4f50-92d1-e3583fbe19fa"
          data-widget-color="#3b82f6"
          data-text-check-availability="Check Availability"
          data-text-book-now="Book Now"
        ></div>
      </div>
    </div>
  );
};

export default BookingWidget;