import React, { useState } from 'react';

const Description = () => {
  const [showModal, setShowModal] = useState(false);

  const shortDescription = `Welcome to Casa Caralago our charming, waterfront retreat in Hollywood, FL! This lovely 3-bed, 3-bath villa 5 minutes from the beach is the perfect spot for a relaxing getaway.

The house itself is bright, airy, and beautifully designed like your favorite boutique hotel with all the essentials.`;

  const fullDescription = `Welcome to Casa Caralago our charming, waterfront retreat in Hollywood, FL! This lovely 3-bed, 3-bath villa 5 minutes from the beach is the perfect spot for a relaxing getaway.

The house itself is bright, airy, and beautifully designed like your favorite boutique hotel with all the essentials. 

Backyard with BBQ & pergola
Fully stocked chef's kitchen
Free on-site parking
Fast Wi-Fi & dedicated workspace

Ready for stunning waterfront sunsets and easy beach days? Book your stay now—paradise awaits!

**The space**
Enjoy sunset and serenity on the water, a fully remodeled 3 bed / 3 bath home. The bedrooms include 1 king bed, 1 queen bed, and 2 twins that can be converted to a king -- all with spotless, luxury bedding. The den provides a comfortable queen-sized pullout sofa bed.

The sleek chef's kitchen opens to the living and dining room and then gorgeous long views of the canal lake with amazing sunsets.

Enjoy a spectacular home with all the amenities you need — high end appliances, barista-style coffee maker, hair dryer, washer and dryer, and toiletries.

Five minutes from the beaches of Hollywood and its famous "Broadwalk", voted one of America's Best Beach Boardwalks by Travel + Leisure magazine. An easy drive to the renowned nightlife and restaurants in Fort Lauderdale or Miami.

Only 10 minutes from Fort Lauderdale - Hollywood airport (FLL) and 30 minutes from MIA airport.

**Guest access**
Guests have full access to the backyard
Self check-in
Free parking (3 spaces)

Other things to note
The studio apartment on the property shares the exterior laundry room and has one parking spot. The seasonal tenant is there about 30% of the year and is the best neighbor ever.

The home is in a quiet, residential neighborhood and the City of Hollywood enforces quiet hours between 11p-6a.`;

  return (
    <>
      <div className="card">
        <h2>Description</h2>
        <div style={{
          maxHeight: '8em',
          overflow: 'hidden',
          position: 'relative',
          lineHeight: '1.6'
        }}>
          <p style={{ whiteSpace: 'pre-line' }}>{shortDescription}</p>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2em',
            background: 'linear-gradient(to bottom, transparent, white)'
          }}></div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#3b82f6',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            padding: '8px 0',
            marginTop: '8px',
            textDecoration: 'underline'
          }}
        >
          Show More
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
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
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setShowModal(false)}
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
            <h2 style={{ marginBottom: '24px' }}>About this space</h2>
            <div 
              style={{ 
                lineHeight: '1.7',
                color: '#555'
              }}
              dangerouslySetInnerHTML={{ 
                __html: fullDescription
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .split('\n')
                  .map(line => line.trim())
                  .join('<br />')
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Description;