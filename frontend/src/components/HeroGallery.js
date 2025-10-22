import React, { useState } from 'react';

const HeroGallery = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/oz6mx42l_01.%20Backyard%20sunset.jpg',
      title: 'Backyard Sunset',
      alt: 'Stunning backyard sunset view'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/6n9m2ovu_02.%20chef%27s%20kitchen.JPG',
      title: "Chef's Kitchen",
      alt: "Gourmet chef's kitchen"
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/e98qdkgs_03.%20Bedroom%201%20-%20Primary.JPG',
      title: 'Primary Bedroom',
      alt: 'Bedroom 1 - Primary bedroom suite'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/aff2letx_04.%20Spacious%20patio.jpg',
      title: 'Spacious Patio',
      alt: 'Spacious outdoor patio area'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/hflvwvk3_05.%20Open%20concept%20living.JPG',
      title: 'Open Concept Living',
      alt: 'Open concept living space'
    }
  ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  return (
    <>
      <div style={{
        background: '#f9fafb',
        padding: '24px 0 0 0'
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{
            display: 'flex',
            gap: '8px',
            fontSize: '14px',
            color: '#999',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>HOME</a>
            <span>/</span>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>PROPERTIES</a>
            <span>/</span>
            <span style={{ color: '#555' }}>HOLLYWOOD SUNSET ON THE WATER</span>
          </div>

          {/* Status Badge & Title */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              background: '#8b5cf6',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              For Rent
            </span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h1 style={{ margin: 0 }}>Hollywood Sunset on the Water</h1>
            <div style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#555'
            }}>
              Price on call
            </div>
          </div>
        </div>
      </div>

      {/* Split Hero Gallery */}
      <div style={{
        background: '#f9fafb',
        padding: '0 0 24px 0'
      }}>
        <div className="container">
          <div 
            className="hero-gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '12px',
              height: '500px'
            }}
          >
            {/* Main Large Image */}
            <div 
              onClick={() => openGallery(0)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '12px',
                background: '#ddd'
              }}
            >
              <img
                src={images[0].url}
                alt={images[0].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Gallery Icon */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#3b82f6',
                color: 'white',
                padding: '10px 16px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                View Gallery
              </div>
            </div>

            {/* Right Side - Smaller Images */}
            <div style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: '12px'
            }}>
              <div 
                onClick={() => openGallery(1)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: '#ddd'
                }}
              >
                <img
                  src={images[1]}
                  alt="Property view 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div 
                onClick={() => openGallery(2)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: '#ddd'
                }}
              >
                <img
                  src={images[2]}
                  alt="Property view 3"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* +1 View More Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(59, 130, 246, 0.95)',
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(8px)'
                }}>
                  + 1<br/>
                  <span style={{ fontSize: '12px', fontWeight: '400' }}>VIEW MORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div
          onClick={() => setShowLightbox(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '40px'
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt="Gallery view"
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
          <button
            onClick={() => setShowLightbox(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default HeroGallery;