import React, { useState } from 'react';

const ContactUs = () => {
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
      const response = await fetch('https://formspree.io/f/xwpkbylw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Casa Caralago Inquiry from ${formData.name}`,
          _cc: 'jonnapeat@yahoo.com,service@myrealtorjhana.com'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
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
    <div className="card" id="contact">
      <h2>Contact Us</h2>
      <p style={{ color: '#555', marginBottom: '24px' }}>
        Have questions about your stay? We're here to help. Send us a message and we'll get back to you as soon as possible.
      </p>
      
      {status === 'success' && (
        <div style={{
          padding: '16px',
          background: '#d1fae5',
          border: '1px solid #34d399',
          borderRadius: '8px',
          marginBottom: '20px',
          color: '#065f46',
          fontSize: '15px'
        }}>
          ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div style={{
          padding: '16px',
          background: '#fee2e2',
          border: '1px solid #f87171',
          borderRadius: '8px',
          marginBottom: '20px',
          color: '#991b1b',
          fontSize: '15px'
        }}>
          ✗ There was an error sending your message. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label 
            htmlFor="name"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#2c3e50'
            }}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s ease',
              opacity: isSubmitting ? 0.6 : 1
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <div>
          <label 
            htmlFor="email"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#2c3e50'
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s ease',
              opacity: isSubmitting ? 0.6 : 1
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <div>
          <label 
            htmlFor="message"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#2c3e50'
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows="5"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              resize: 'vertical',
              transition: 'border-color 0.2s ease',
              opacity: isSubmitting ? 0.6 : 1
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <button 
          type="submit" 
          className="btn-primary" 
          style={{ width: '100%' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
