import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      date: 'January 2025',
      rating: 5,
      comment: 'Absolutely stunning property! The waterfront views were breathtaking, and the amenities exceeded our expectations. The home was immaculate and beautifully decorated. We enjoyed every moment of our stay.',
      avatar: 'SM'
    },
    {
      name: 'Michael & Jennifer R.',
      date: 'December 2024',
      rating: 5,
      comment: 'Perfect location for our family vacation. The pool and hot tub were amazing, and the kids loved having direct water access. The host was incredibly responsive and helpful. Highly recommend!',
      avatar: 'MJ'
    },
    {
      name: 'David L.',
      date: 'November 2024',
      rating: 5,
      comment: 'This property is a hidden gem. The attention to detail is remarkable, from the luxury linens to the fully stocked kitchen. The sunset views from the balcony are unforgettable. Will definitely return!',
      avatar: 'DL'
    },
    {
      name: 'Emily & Thomas W.',
      date: 'October 2024',
      rating: 5,
      comment: 'Our stay was nothing short of perfect. The home is even more beautiful in person. Every room has a view, and the outdoor space is incredible. Great for entertaining and relaxing alike.',
      avatar: 'ET'
    },
    {
      name: 'Rachel P.',
      date: 'September 2024',
      rating: 5,
      comment: 'An exceptional property in every way. The location is unbeatable, the home is luxurious and comfortable, and the amenities are top-notch. This was truly a five-star experience.',
      avatar: 'RP'
    },
    {
      name: 'James & Lisa K.',
      date: 'August 2024',
      rating: 5,
      comment: 'We celebrated our anniversary here and it could not have been more perfect. Romantic, peaceful, and absolutely beautiful. The host thought of everything. Thank you for an unforgettable stay!',
      avatar: 'JL'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < rating ? 'var(--text-primary)' : 'var(--border-light)',
              fontSize: '16px'
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" style={{
      background: 'var(--bg-primary)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-1">Guest Experiences</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
            Hear from our delighted guests
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '12px',
            marginTop: '24px'
          }}>
            {renderStars(5)}
            <span className="body-regular" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
              5.0 · {reviews.length} Reviews
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '32px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              className="hover-lift"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    {review.avatar}
                  </div>
                  <div>
                    <p style={{ 
                      margin: 0, 
                      fontWeight: '500', 
                      fontSize: '16px',
                      color: 'var(--text-primary)'
                    }}>
                      {review.name}
                    </p>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-light)' }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="body-regular" style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0
              }}>
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '64px',
          textAlign: 'center',
          padding: '48px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)'
        }}>
          <h3 className="heading-2" style={{ marginBottom: '16px' }}>Ready to Create Your Own Memories?</h3>
          <p className="body-regular" style={{ 
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Join our community of satisfied guests and experience luxury waterfront living at its finest.
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('booking-widget');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Stay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;