import React, { useState } from 'react';

const AboutHost = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xpwyvzag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: 'Direct Booking Inquiry: Hollywood 920'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowContactModal(false);
          setStatus('');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="card" id="contact">
        <h2>About the Host</h2>
        
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '24px',
          marginTop: '24px'
        }}>
          {/* Host Image */}
          <div style={{
            flexShrink: 0
          }}>
            <img 
              src="/host-image.png"
              alt="Jonna & Jhana"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5DBEAA'
              }}
            />
          </div>

          {/* Host Info */}
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#2c3e50',
              marginBottom: '8px'
            }}>
              Jonna & Jhana
            </h3>
            
            <div style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              <p style={{ marginBottom: '12px' }}>
                Welcome to Casa Caralago! We're excited to share our beautiful waterfront home with you. 
                This property has been thoughtfully designed to provide a comfortable and luxurious retreat 
                for our guests.
              </p>
              <p style={{ marginBottom: '12px' }}>
                We take pride in ensuring every detail is perfect for your stay, from the fully equipped 
                kitchen to the stunning backyard with sunset views over the water. Our home is located in 
                the peaceful Hollywood Lakes neighborhood, just minutes from Hollywood Beach.
              </p>
              <p>
                We're here to help make your stay memorable. Feel free to reach out with any questions 
                or special requests!
              </p>
            </div>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2563eb'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Contact Host
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setShowContactModal(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowContactModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: '#999',
                lineHeight: 1,
                padding: '4px'
              }}
            >
              ×
            </button>

            <h2 style={{ marginBottom: '24px' }}>Contact Host</h2>

            {status === 'success' && (
              <div style={{
                background: '#d1fae5',
                border: '1px solid #10b981',
                color: '#065f46',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div style={{
                background: '#fee2e2',
                border: '1px solid #ef4444',
                color: '#991b1b',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#9ca3af' : '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.target.style.background = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.target.style.background = '#3b82f6';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutHost;
