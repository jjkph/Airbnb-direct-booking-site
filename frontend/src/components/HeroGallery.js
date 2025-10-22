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
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/qzf73tzk_06.%20Bedroom%202%20-%20Queen.JPG',
      title: 'Bedroom 2 - Queen',
      alt: 'Queen bedroom suite'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/p6i2yhd0_07.%20Bedroom%203%20-%20Twins%20convertible%20to%20king.JPG',
      title: 'Bedroom 3 - Twins Convertible to King',
      alt: 'Twin beds convertible to king'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/rf7z59wq_08.%20Bathroom%201.JPG',
      title: 'Bathroom 1',
      alt: 'Modern bathroom with teal accents'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/c76y1ofy_09.%20Den%20with%20queen%20Crate%20%26%20Barrel%20sleeper%20sofa.JPG',
      title: 'Den with Queen Sleeper Sofa',
      alt: 'Cozy den with Crate & Barrel sleeper sofa'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/e5nfxomd_10.%20Bathroom%202.JPG',
      title: 'Bathroom 2',
      alt: 'Elegant bathroom with marble countertops'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/n5m8u503_11.%20Bathroom%203.JPG',
      title: 'Bathroom 3',
      alt: 'Beautiful bathroom with decorative wallpaper'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/qu4lptc3_12.%20From%20listing%20-%20Whole%20house.jpg',
      title: 'Whole House',
      alt: 'Aerial view of entire property'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/oee0a3mz_13.%20Counter%20seating.JPG',
      title: 'Counter Seating',
      alt: 'Kitchen counter with bar seating'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/cytfsu9s_14.%20Kitchen%20well-equipped.JPG',
      title: 'Well-Equipped Kitchen',
      alt: 'Kitchen with modern appliances'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_hollywood-retreat/artifacts/mz3uvjzg_15.%20Coffee%20station.JPG',
      title: 'Coffee Station',
      alt: 'Barista-style coffee maker station'
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
            <span style={{ color: '#555' }}>CASA CARALAGO</span>
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

          <h1 style={{ margin: 0, marginBottom: '12px' }}>Casa Caralago: Waterfront Luxury, 5 Minutes to Beach</h1>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <a 
              href="#reviews" 
              style={{
                color: '#3b82f6',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              4 reviews
            </a>
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
              gridTemplateColumns: '2fr 1fr 1fr',
              gap: '12px',
              height: '500px'
            }}
          >
            {/* Main Large Image - spans 2 rows */}
            <div 
              onClick={() => openGallery(0)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '12px',
                background: '#ddd',
                gridRow: 'span 2'
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

            {/* Top Right Images */}
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
                src={images[1].url}
                alt={images[1].alt}
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
                src={images[2].url}
                alt={images[2].alt}
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

            {/* Bottom Right Images */}
            <div 
              onClick={() => openGallery(3)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '12px',
                background: '#ddd'
              }}
            >
              <img
                src={images[3].url}
                alt={images[3].alt}
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
              onClick={() => openGallery(4)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '12px',
                background: '#ddd'
              }}
            >
              <img
                src={images[4].url}
                alt={images[4].alt}
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
              {/* +5 View More Overlay */}
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
                + 5<br/>
                <span style={{ fontSize: '12px', fontWeight: '400' }}>VIEW MORE</span>
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
          <div style={{ textAlign: 'center' }}>
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              style={{
                maxWidth: '90%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <div style={{
              color: 'white',
              fontSize: '18px',
              marginTop: '16px',
              fontWeight: '500'
            }}>
              {images[currentImageIndex].title}
            </div>
            <div style={{
              color: '#999',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowLightbox(false);
            }}
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
          
          {/* Previous Button */}
          {currentImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(currentImageIndex - 1);
              }}
              style={{
                position: 'absolute',
                left: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700'
              }}
            >
              ‹
            </button>
          )}
          
          {/* Next Button */}
          {currentImageIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(currentImageIndex + 1);
              }}
              style={{
                position: 'absolute',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700'
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default HeroGallery;