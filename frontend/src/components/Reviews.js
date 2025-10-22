import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      date: 'January 2025',
      rating: 5,
      comment: 'Absolutely stunning property! The waterfront views were breathtaking, and the amenities exceeded our expectations. The home was immaculate and beautifully decorated. We enjoyed every moment of our stay.'
    },
    {
      name: 'Michael R.',
      date: 'December 2024',
      rating: 5,
      comment: 'Perfect location for our family vacation. The property was exactly as described. The host was incredibly responsive and helpful. Highly recommend!'
    },
    {
      name: 'David L.',
      date: 'November 2024',
      rating: 5,
      comment: 'This property is a hidden gem. The attention to detail is remarkable. The sunset views are unforgettable. Will definitely return!'
    },
    {
      name: 'Emily W.',
      date: 'October 2024',
      rating: 5,
      comment: 'Our stay was nothing short of perfect. The home is even more beautiful in person. Every room has a view, and the outdoor space is incredible.'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '2px' }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={index < rating ? '#fbbf24' : '#e5e7eb'}
            stroke="none"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ margin: 0 }}>Guest Reviews</h2>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {renderStars(5)}
          <span style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>5.0 ({reviews.length} reviews)</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gap: '16px'
      }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px'
            }}>
              <div>
                <div style={{
                  fontWeight: '600',
                  color: '#2c3e50',
                  marginBottom: '4px'
                }}>
                  {review.name}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#999'
                }}>
                  {review.date}
                </div>
              </div>
              {renderStars(review.rating)}
            </div>
            <p style={{
              margin: 0,
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#555'
            }}>
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;