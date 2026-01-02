import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  // Set your public contact info here. Leave phone empty to hide it.
  const CONTACT = {
    github: 'https://github.com/charan-gubbala',
    linkedin: 'https://www.linkedin.com/in/charan-gubbala-417a30259',
    email: 'nameischaran4@gmail.com',
    phone: '' // e.g., '+91-9XXXXXXXXX' (rendered only if not empty)
  };

  // ============================================
  // EmailJS Configuration
  // ============================================
  // These values are loaded from .env file in the root 'port' directory
  // 
  // To configure:
  // 1. Open: port/.env file
  // 2. Replace the placeholder values with your actual EmailJS keys:
  //    - VITE_EMAILJS_SERVICE_ID=your_service_id_here
  //    - VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
  //    - VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
  // 3. Get your keys from: https://www.emailjs.com/
  // 4. Restart dev server after updating .env file
  // ============================================
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;      // ← Loads from .env file
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;     // ← Loads from .env file
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;       // ← Loads from .env file

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS with Public Key (loaded from .env file)
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);  // ← Uses EMAILJS_PUBLIC_KEY from .env
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('');

    // Check if EmailJS is configured (all keys must be in .env file)
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setIsSubmitting(false);
      setErrorMessage('Email service not configured. Please contact me directly at ' + CONTACT.email);
      setSubmitStatus('error');
      return;
    }

    try {
      // Send email using EmailJS
      // All three keys are used here (loaded from .env file):
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,      // ← Service ID from .env (e.g., "service_abc123")
        EMAILJS_TEMPLATE_ID,     // ← Template ID from .env (e.g., "template_xyz789")
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: CONTACT.email,
        },
        EMAILJS_PUBLIC_KEY       // ← Public Key from .env (e.g., "user_abcdefghijklmnop")
      );

      console.log('Email sent successfully:', result);
      
      // Success - Show popup modal
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      // Provide user-friendly error message
      let errorMsg = 'Failed to send message. ';
      if (error.text) {
        errorMsg += error.text + '. ';
      }
      errorMsg += `Please try again or contact me directly at ${CONTACT.email}`;
      
      setErrorMessage(errorMsg);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {/* Success Popup Modal */}
      {showSuccessModal && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '2px solid #facc15',
              position: 'relative',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                color: '#9ca3af',
                fontSize: '24px',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(250, 204, 21, 0.1)';
                e.target.style.color = '#facc15';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#9ca3af';
              }}
            >
              ×
            </button>

            {/* Success Icon */}
            <div style={{
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #facc15 0%, #fbbf24 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(250, 204, 21, 0.3)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1f2937' }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 style={{
              color: '#facc15',
              fontSize: '28px',
              fontWeight: '600',
              textAlign: 'center',
              margin: '0 0 15px 0',
              lineHeight: '1.2'
            }}>
              Thank You! 🎉
            </h2>

            <p style={{
              color: '#d1d5db',
              fontSize: '16px',
              textAlign: 'center',
              margin: '0 0 20px 0',
              lineHeight: '1.6'
            }}>
              Thank you for reaching out to me!
            </p>

            <div style={{
              background: 'rgba(250, 204, 21, 0.1)',
              border: '1px solid rgba(250, 204, 21, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '25px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(250, 204, 21, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p style={{
                    color: '#facc15',
                    fontSize: '14px',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    Email Confirmation
                  </p>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '13px',
                    margin: '4px 0 0 0'
                  }}>
                    Your message has been sent successfully!
                  </p>
                </div>
              </div>
              <p style={{
                color: '#d1d5db',
                fontSize: '14px',
                margin: '10px 0 0 0',
                lineHeight: '1.5'
              }}>
                I've received your message and will get back to you as soon as possible. You should receive a confirmation email shortly.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #facc15 0%, #fbbf24 100%)',
                color: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(250, 204, 21, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(250, 204, 21, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(250, 204, 21, 0.3)';
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="card">
      <h2>Get In Touch</h2>
      <p className="text-text-secondary mb-8 text-[1.1rem]">
        I'm always interested in new opportunities and exciting projects. Whether you have a question, 
        want to collaborate, or just want to say hello, feel free to reach out!
      </p>
      
      <div className="contact-cards-container">
        {/* Contact Information Card */}
        <div className="contact-info-card">
          <h3 className="text-accent-primary mb-6">Contact Information</h3>
          
          {/* Quick icon row */}
          <div className="contact-quick-links">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="contact-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            {CONTACT.phone && (
              <a href={`tel:${CONTACT.phone}`} className="contact-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            )}
          </div>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-text-primary">Email</div>
                <a href={`mailto:${CONTACT.email}`} className="text-accent-primary">
                  {CONTACT.email}
                </a>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-text-primary">Location</div>
                <div className="text-text-secondary"> Narsapur, West Godavari, Andhra Pradesh, India</div>
              </div>
            </div>
            
            {CONTACT.phone && (
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Phone</div>
                  <a href={`tel:${CONTACT.phone}`} className="text-accent-primary">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            )}

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-text-primary">Availability</div>
                <div className="text-text-secondary">Open to opportunities</div>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-text-primary">LinkedIn</div>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-accent-primary">
                  charan-gubbala
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Send a Message Card */}
        <div className="contact-form-card">
          <h3 className="text-accent-secondary mb-6">Send a Message</h3>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-full disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {errorMessage && (
              <div className="text-red-400 text-center mt-4 p-3 bg-red-500/10 rounded-full border border-red-400/50">
                ❌ {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>

    <style>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideUp {
        from {
          transform: translateY(30px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}</style>
    </>
  );
}