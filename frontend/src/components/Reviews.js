import React, { useState } from 'react';

const Reviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allReviews = [
    {
      name: 'Karen',
      date: 'September 2025',
      rating: 5,
      comment: 'Jonna\'s place was amazing and she accommodated my family and I last minute when we had a terrible experience and another Airbnb. The home was perfect and very clean and the location is 5 min drive from the beach. If you\'re looking at booking just do it. Very peaceful.'
    },
    {
      name: 'Jennifer',
      date: 'July 2025',
      rating: 5,
      comment: 'Beautiful last minute accommodation host was responsive and beautiful place'
    },
    {
      name: 'Margarita',
      date: 'May 2025',
      rating: 5,
      comment: 'The place and host were AWESOME!. Jonna was very helpful and responsive. The house had all the amenities and was clean and tidy. It was a great place to use as a base and was peaceful to relax in at the end of the day. Absolutely recommend Jonna as a host and this house!'
    },
    {
      name: 'Tanisha',
      date: 'June 2025',
      rating: 5,
      comment: 'Jonna\'s house is beautifully decorated and in a lovely neighborhood! We really enjoyed our time walking to the nearby park and enjoying the view outside.'
    },
    {
      name: 'Jason',
      date: 'July 2025',
      rating: 5,
      comment: 'This by is far my favorite AIRBNB! Jonna and her family did an amazing anticipating the needs of her target audience when renovating her rental. The decor is amazing and is carried throughout the entire house. Jonna had top of the line linen, soaps, cleaners, appliances, furnishings and more. Enjoying a sunset from the back patio was the perfect way to end a day. I\'m looking forward to booking your home again in the future! Thank you for being such a wonderful Host!'
    },
    {
      name: 'Sheri',
      date: 'March 2025',
      rating: 5,
      comment: 'We absolutely loved this house! The home was exceptionally clean, the decor was stunning and the view from the back patio was so beautiful and calming. The house was equipped with everything we needed from kitchen cookware and utensils to bathroom towels, shampoo, conditioner, etc. There were even beach towels, a beach blanket, chairs and an umbrella to use which was especially beneficial since we flew in for the trip and weren\'t able to bring those things with us. The house is in a very quiet, convenient location - just minutes from the beach and airport! We would love to stay here again!'
    },
    {
      name: 'Karen',
      date: 'September 2025',
      rating: 5,
      comment: 'Excellent house, everything was very good',
      translated: true
    },
    {
      name: 'Lian',
      date: 'April 2025',
      rating: 5,
      comment: 'Excellent stay. The unit was comfortable and spacious. Would stay again in the future.'
    },
    {
      name: 'Salo',
      date: 'June 2025',
      rating: 5,
      comment: ''
    },
    {
      name: 'Marni',
      date: 'September 2024',
      rating: 5,
      comment: ''
    },
    {
      name: 'Amy',
      date: 'July 2024',
      rating: 5,
      comment: ''
    },
    {
      name: 'Sergio',
      date: 'July 2025',
      rating: 5,
      comment: ''
    },
    {
      name: 'Mauro',
      date: 'February 2025',
      rating: 5,
      comment: ''
    },
    {
      name: 'Mishka',
      date: 'September 2024',
      rating: 5,
      comment: ''
    }
  ];

  const initialReviews = allReviews.slice(0, 3);

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
    <>
      <div className="card" id="reviews">
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
            }}>5.0 ({allReviews.length} reviews)</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gap: '16px'
        }}>
          {initialReviews.map((review, index) => (
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
                marginBottom: review.comment ? '12px' : '0'
              }}>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '4px'
                  }}>
                    {review.name}
                    {review.translated && (
                      <span style={{
                        fontSize: '12px',
                        color: '#999',
                        fontWeight: 'normal',
                        marginLeft: '6px'
                      }}>
                        (Translated from Spanish)
                      </span>
                    )}
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
              {review.comment && (
                <p style={{
                  margin: 0,
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  {review.comment}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Show All Reviews Button */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            onClick={() => setShowAllReviews(true)}
            className="btn-primary"
            style={{ width: 'auto' }}
          >
            Show All Reviews
          </button>
        </div>
      </div>

      {/* All Reviews Modal */}
      {showAllReviews && (
        <div
          onClick={() => setShowAllReviews(false)}
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
              maxWidth: '900px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative',
              width: '100%'
            }}
          >
            <button
              onClick={() => setShowAllReviews(false)}
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
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <h2 style={{ margin: 0 }}>All Guest Reviews</h2>
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
                }}>5.0 ({allReviews.length} reviews)</span>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              {allReviews.map((review, index) => (
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
                    marginBottom: review.comment ? '12px' : '0'
                  }}>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: '#2c3e50',
                        marginBottom: '4px'
                      }}>
                        {review.name}
                        {review.translated && (
                          <span style={{
                            fontSize: '12px',
                            color: '#999',
                            fontWeight: 'normal',
                            marginLeft: '6px'
                          }}>
                            (Translated from Spanish)
                          </span>
                        )}
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
                  {review.comment && (
                    <p style={{
                      margin: 0,
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#555'
                    }}>
                      {review.comment}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;