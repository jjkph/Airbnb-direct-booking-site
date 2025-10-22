import React, { useState } from 'react';

const ThingsToKnow = () => {
  const [showHouseRulesModal, setShowHouseRulesModal] = useState(false);

  return (
    <>
      <div className="card" id="things-to-know">
        <h2 style={{ marginBottom: '32px' }}>Things to know</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}
        className="things-to-know-grid"
        >
          {/* House Rules Column */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>House rules</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginBottom: '16px'
            }}>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Check-in after 3:00 PM
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Checkout before 11:00 AM
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                8 guests maximum
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                No pets
              </li>
            </ul>
            <button
              onClick={() => setShowHouseRulesModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#3b82f6',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline'
              }}
            >
              Show more...
            </button>
          </div>

          {/* Safety Column */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>Safety & property</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Exterior security cameras on property
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Carbon monoxide alarm installed
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Smoke alarm installed
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Noise decibel monitors on property
              </li>
            </ul>
          </div>

          {/* Cancellation Policy Column */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: '16px' }}>Cancellation policy</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                Guests can cancel up to 5 days before check-in with a full refund
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                If cancelled after 5 days before check-in, the guest pays for 1 extra night and 50% of the booking cost
              </li>
              <li style={{
                fontSize: '15px',
                color: '#555',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                After check-in, the guest pays for all of nights stayed, 1 extra night, and 50% of the rest the booked nights
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* House Rules Modal */}
      {showHouseRulesModal && (
        <div
          onClick={() => setShowHouseRulesModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '40px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative',
              width: '100%'
            }}
          >
            <button
              onClick={() => setShowHouseRulesModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#f3f4f6',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <h2 style={{ marginBottom: '16px' }}>House rules</h2>
            <p style={{ color: '#555', fontSize: '15px', marginBottom: '32px', lineHeight: '1.6' }}>
              You'll be staying in someone's home, so please treat it with care and respect.
            </p>

            {/* Checking in and out */}
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#2c3e50',
              marginBottom: '16px',
              marginTop: '24px'
            }}>
              Checking in and out
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Check-in after 3:00 PM
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Checkout before 11:00 AM
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Self check-in with smart lock
              </li>
            </ul>

            {/* During your stay */}
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#2c3e50',
              marginBottom: '16px',
              marginTop: '24px'
            }}>
              During your stay
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                8 guests maximum
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                No pets
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Quiet hours: 11:00 PM - 6:00 AM
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                No parties or events
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                No commercial photography
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                No smoking
              </li>
            </ul>

            {/* Additional rules */}
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#2c3e50',
              marginBottom: '16px',
              marginTop: '24px'
            }}>
              Additional rules
            </h3>
            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '24px' }}>
              <p style={{ marginBottom: '16px' }}>
                <strong>1. QUIET HOURS:</strong> The home is in a quiet, residential neighborhood and the City of Hollywood enforces quiet hours between 11p-6a using a 24/7 neighbor hotline. As required, noise detection monitors are present, but don't worry! They are privacy safe and capture only sound levels, not conversations. PLEASE NOTE: We are automatically notified of any tampering with these and other devices including the router. Any guest action that results in these devices going offline will be grounds for immediate termination of the stay with no refund.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>2. NO SMOKING:</strong> To ensure home protection and the safety of our guests, we use a sensor to detect smoke. Please note that if you smoke inside the property, you may have to pay an extra cleaning fee, which includes service charges and ozone generator hire, and is typically around $300.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>3. TRASH COLLECTION:</strong> Please take the large trash bins (located to the right side of the house by the shed) to the curb for pickup on garbage days. Tuesdays (trash & recycling) Fridays (trash only)
              </p>
            </div>

            {/* Before you leave */}
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#2c3e50',
              marginBottom: '16px',
              marginTop: '24px'
            }}>
              Before you leave
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Throw trash away
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Turn things off
              </li>
              <li style={{ fontSize: '15px', color: '#555', marginBottom: '8px', lineHeight: '1.6' }}>
                Lock up
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ThingsToKnow;
