import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const subject = `Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{
      background: 'var(--bg-secondary)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div className="grid-two-column" style={{ gap: '80px' }}>
          {/* Left: Contact Info */}
          <div>
            <h2 className="heading-1" style={{ marginBottom: '24px' }}>Get in Touch</h2>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '48px'
            }}>
              Have questions about your stay? We're here to help make your experience 
              unforgettable. Reach out to us directly or use the contact form.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>Property Management</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Available 24/7 for guest support
                </p>
              </div>

              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>Email</h3>
                <a 
                  href="mailto:your-email@example.com"
                  className="body-regular"
                  style={{ 
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-medium)',
                    paddingBottom: '2px',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                >
                  your-email@example.com
                </a>
              </div>

              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>Phone</h3>
                <a 
                  href="tel:+11234567890"
                  className="body-regular"
                  style={{ 
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-medium)',
                    paddingBottom: '2px',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                >
                  +1 (123) 456-7890
                </a>
              </div>

              <div>
                <h3 className="heading-3" style={{ marginBottom: '8px' }}>Location</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Hollywood Waterfront District<br />
                  [Complete Address]<br />
                  Hollywood, FL [ZIP]
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div style={{
              background: 'white',
              padding: '48px',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-2" style={{ marginBottom: '24px' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label 
                    htmlFor="name"
                    className="body-small"
                    style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="body-small"
                    style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone"
                    className="body-small"
                    style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="body-small"
                    style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;