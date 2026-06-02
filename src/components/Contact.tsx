import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'gokulavasanbk@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Inquiry');
    const body = encodeURIComponent(
      `Hello Gokulavasan,\n\nYou have received a new message from your portfolio website:\n\n` +
      `Sender Name: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoUrl;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-5 position-relative">
      {/* Decorative background nebula blur */}
      <div className="nebula-cyan" style={{ bottom: '5%', right: '10%' }} />

      <div className="container py-4">
        {/* Section Header */}
        <div className="section-title-container">
          <h2 className="section-title fw-extrabold text-white">Get In Touch</h2>
          <div className="glow-underline"></div>
        </div>

        <div className="row g-5">
          {/* Left Column: Direct Info & Socials */}
          <div className="col-lg-5">
            <div className="space-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-white fw-bold mb-3">Let's Connect</h4>
                <p className="text-muted mb-4 fs-6" style={{ lineHeight: '1.7' }}>
                  I'm actively seeking opportunities to apply my full-stack MERN expertise and machine learning concepts. Reach out if you want to collaborate, review my credentials, or discuss tech challenges!
                </p>

                {/* Info Cards */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Email Card */}
                  <div 
                    className="p-3 rounded-3 border d-flex align-items-center justify-content-between"
                    style={{
                      background: 'rgba(6, 6, 18, 0.45)',
                      borderColor: 'rgba(0, 242, 254, 0.1)',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded-circle bg-cyan-glow bg-opacity-10 text-cyan d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', background: 'rgba(0,242,254,0.08)' }}>
                        <Mail size={18} />
                      </div>
                      <div>
                        <small className="text-muted d-block fs-8">EMAIL ME</small>
                        <a href={`mailto:${emailAddress}`} className="text-white text-decoration-none fw-semibold fs-7 word-break">
                          {emailAddress}
                        </a>
                      </div>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="btn border-0 text-cyan p-2 bg-transparent"
                      title="Copy Email"
                    >
                      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Phone Card */}
                  <div 
                    className="p-3 rounded-3 border d-flex align-items-center gap-3"
                    style={{
                      background: 'rgba(6, 6, 18, 0.45)',
                      borderColor: 'rgba(189, 0, 255, 0.1)',
                    }}
                  >
                    <div className="p-2 rounded-circle bg-purple-glow bg-opacity-10 text-purple d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', background: 'rgba(189,0,255,0.08)' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <small className="text-muted d-block fs-8">CALL ME</small>
                      <a href="tel:+918608654288" className="text-white text-decoration-none fw-semibold fs-7">
                        +91 8608654288
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Buttons */}
              <div>
                <h6 className="text-white fw-bold mb-3" style={{ letterSpacing: '0.05em' }}>SOCIAL CHANNELS</h6>
                <div className="d-flex gap-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-cosmic py-2.5 px-4 fs-7 flex-grow-1 justify-content-center"
                  >
                    <i className="bi bi-github me-1"></i> GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-cosmic-outline py-2.5 px-4 fs-7 flex-grow-1 justify-content-center"
                    style={{ borderColor: 'rgba(189, 0, 255, 0.3)', color: 'var(--text-purple)' }}
                  >
                    <i className="bi bi-linkedin me-1 text-purple"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="col-lg-7">
            <div className="space-card space-card-purple">
              <h4 className="text-white fw-bold mb-4">Send a Message</h4>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  {/* Name field */}
                  <div className="col-md-6">
                    <label htmlFor="form-name" className="form-label text-muted fs-8 fw-semibold">YOUR NAME</label>
                    <input 
                      type="text" 
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control text-white border border-opacity-10 py-2.5 px-3 fs-7"
                      style={{
                        background: 'rgba(2, 2, 8, 0.6)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                      placeholder="Gokul"
                      onFocus={(e) => e.target.style.borderColor = 'var(--purple-glow)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>

                  {/* Email field */}
                  <div className="col-md-6">
                    <label htmlFor="form-email" className="form-label text-muted fs-8 fw-semibold">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-control text-white border border-opacity-10 py-2.5 px-3 fs-7"
                      style={{
                        background: 'rgba(2, 2, 8, 0.6)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                      placeholder="gokul@example.com"
                      onFocus={(e) => e.target.style.borderColor = 'var(--purple-glow)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="form-subject" className="form-label text-muted fs-8 fw-semibold">SUBJECT</label>
                  <input 
                    type="text" 
                    id="form-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-control text-white border border-opacity-10 py-2.5 px-3 fs-7"
                    style={{
                      background: 'rgba(2, 2, 8, 0.6)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    placeholder="MERN Stack Project Discussion"
                    onFocus={(e) => e.target.style.borderColor = 'var(--purple-glow)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="form-message" className="form-label text-muted fs-8 fw-semibold">YOUR MESSAGE</label>
                  <textarea 
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-control text-white border border-opacity-10 py-2.5 px-3 fs-7"
                    style={{
                      background: 'rgba(2, 2, 8, 0.6)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      outline: 'none',
                      boxShadow: 'none',
                      resize: 'none'
                    }}
                    placeholder="Hello Gokul, I reviewed your portfolio and..."
                    onFocus={(e) => e.target.style.borderColor = 'var(--purple-glow)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={submitted}
                  className="btn-cosmic py-3 justify-content-center w-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(189, 0, 255, 0.15) 0%, rgba(0, 242, 254, 0.25) 100%)',
                    borderColor: 'var(--purple-glow)'
                  }}
                >
                  {submitted ? (
                    <span>Thank You! Message Dispatched...</span>
                  ) : (
                    <>
                      <Send size={16} /> Shoot Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
