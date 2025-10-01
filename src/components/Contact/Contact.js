import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_lrxpovl',
    TEMPLATE_ID: 'template_99d11vj',
    USER_ID: 'WUkGBax0TmKiAFTuZ'
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'britomm23@gmail.com',
      link: 'mailto:britomm23@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+234 707-972-4342',
      link: 'https://wa.me/2347079724342'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Lagos, Nigeria',
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bright-momoh-9997652a3/',
      className: 'social-linkedin'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Britom247',
      className: 'social-github'
    },
    {
      icon: <FaXTwitter />,
      name: 'Twitter',
      url: 'https://x.com/bright_mom62851/',
      className: 'social-twitter'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/t_britoo247/',
      className: 'social-instagram'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://facebook.com/profile.php?id=61566911621152',
      className: 'social-facebook'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Reset alert
    setShowAlert(false);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        e.target,
        EMAILJS_CONFIG.USER_ID
      );

      console.log('Email sent successfully:', result.text);
      
      // Show success message
      setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
      setAlertVariant('success');
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      setAlertMessage('Sorry, there was an error sending your message. Please try again or email me directly.');
      setAlertVariant('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-3">Get In Touch</h2>
            <p className="section-subtitle text-center mb-5">
              I'm always open to discussing new opportunities and creative projects
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Information */}
          <Col lg={4} className="mb-5">
            <div className="contact-info-wrapper">
              <h3 className="contact-info-title">Let's talk about everything!</h3>
              <p className="contact-info-description">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you. Send me a message 
                and I'll respond as soon as possible.
              </p>

              {/* Contact Methods */}
              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="contact-method-item"
                  >
                    <div className="contact-method-icon">
                      {item.icon}
                    </div>
                    <div className="contact-method-content">
                      <h5>{item.title}</h5>
                      <p>{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social-links">
                <h5 className="contact-social-title">Follow me on</h5>
                <div className="contact-social-links-container">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social-link ${social.className.replace('social-', 'contact-social-')}`}
                      title={social.name}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                {showAlert && (
                  <Alert variant={alertVariant} className="d-flex align-items-center">
                    {alertVariant === 'success' ? (
                      <FaCheckCircle className="me-2" />
                    ) : (
                      <FaExclamationTriangle className="me-2" />
                    )}
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="message-textarea"
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            {/* Additional Contact Options */}
            <Row className="mt-4">
              <Col md={4} className="mb-3">
                <Card className="contact-option-card text-center">
                  <Card.Body>
                    <FaEnvelope size={24} className="text-primary mb-2" />
                    <h6>Email Response</h6>
                    <p className="small mb-0">Within 24 hours</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="contact-option-card text-center">
                  <Card.Body>
                    <FaPhone size={24} className="text-success mb-2" />
                    <h6>Phone Call</h6>
                    <p className="small mb-0">Schedule a call</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="contact-option-card text-center">
                  <Card.Body>
                    <FaMapMarkerAlt size={24} className="text-warning mb-2" />
                    <h6>Remote Work</h6>
                    <p className="small mb-0">Available worldwide</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="map-section">
              <h4 className="text-center mb-4">Based in Lagos, Nigeria</h4>
              <div className="map-placeholder">
                <div className="map-content">
                  <FaMapMarkerAlt size={48} className="text-primary mb-3" />
                  <h5>Lagos, Nigeria</h5>
                  <p>Open to remote opportunities worldwide</p>
                  <Button variant="outline-primary" size="sm">
                    View Full Location
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;