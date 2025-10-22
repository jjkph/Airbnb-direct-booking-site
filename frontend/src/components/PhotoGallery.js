import React, { useState } from 'react';

const PhotoGallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1759020623226-73ec7a068b11',
      title: 'Waterfront Exterior',
      category: 'Exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1678922270109-14d0700f8088',
      title: 'Modern Lakefront View',
      category: 'Exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1729605412224-147d072d3667',
      title: 'Luxury Bedroom',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/34379202/pexels-photo-34379202.jpeg',
      title: 'Living Space',
      category: 'Interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1598924957326-0446ac30341e',
      title: 'Pool & Entertainment',
      category: 'Amenities'
    },
    {
      url: 'https://images.unsplash.com/photo-1550031675-a3c31940b7db',
      title: 'Serene Water Views',
      category: 'Views'
    },
    {
      url: 'https://images.unsplash.com/photo-1758299892056-2a2f980c993d',
      title: 'Marina View',
      category: 'Exterior'
    },
    {
      url: 'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg',
      title: 'Sunset View',
      category: 'Views'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Exterior', 'Interior', 'Amenities', 'Views'];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" style={{
      background: 'var(--bg-primary)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-1">Experience the Beauty</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Explore every corner of your future waterfront escape
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                background: filter === category ? 'var(--interactive-base)' : 'transparent',
                color: filter === category ? 'var(--bg-primary)' : 'var(--interactive-base)',
                border: '1px solid var(--interactive-base)',
                borderRadius: '0px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="hover-lift"
              style={{
                position: 'relative',
                height: '300px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--border-light)'
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                padding: '24px 20px',
                color: 'white'
              }}>
                <p className="body-small" style={{ 
                  margin: 0, 
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {image.category}
                </p>
                <p style={{ 
                  margin: '4px 0 0 0', 
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'white'
                }}>
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
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
              padding: '40px',
              cursor: 'pointer'
            }}
          >
            <div style={{ position: 'relative', maxWidth: '1200px', maxHeight: '90vh' }}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'white'
              }}>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>{selectedImage.title}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '40px',
                  cursor: 'pointer',
                  padding: '10px',
                  lineHeight: '1'
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;