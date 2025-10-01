import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Modal } from 'react-bootstrap';
import { FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaArrowUp, FaCode, FaCoffee } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showModal, setShowModal] = useState({
    privacy: false,
    terms: false,
    sitemap: false
  });

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'React Applications',
    'UI/UX Design',
    'Frontend Consulting',
    'Code Review',
    'Technical Mentoring'
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bright-momoh-9997652a3/',
      className: 'footer-social-link social-linkedin'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Britom247',
      className: 'footer-social-link social-github'
    },
    {
      icon: <FaXTwitter />,
      name: 'X (Twitter)',
      url: 'https://x.com/bright_mom62851/',
      className: 'footer-social-link social-twitter'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/t_britoo247/',
      className: 'footer-social-link social-instagram'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://facebook.com/profile.php?id=61566911621152',
      className: 'footer-social-link social-facebook'
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'britomm23@gmail.com',
      link: 'mailto:britomm23@gmail.com'
    },
    {
      icon: <FaPhone />,
      text: '+234 707-972-4342',
      link: 'https://wa.me/2347079724342'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Lagos, Nigeria',
    }
  ];

  const toggleModal = (modalName) => {
    setShowModal(prev => ({
      ...prev,
      [modalName]: !prev[modalName]
    }));
  };

  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div>
          <p><strong>Last Updated:</strong> {new Date().getFullYear()}</p>
          
          <h5>Information We Collect</h5>
          <p>We collect information you provide directly to us, such as when you contact us through our website or subscribe to our newsletter.</p>
          
          <h5>How We Use Your Information</h5>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates about our services (if you subscribe)</li>
            <li>Improve our website and services</li>
          </ul>
          
          <h5>Data Protection</h5>
          <p>We implement appropriate security measures to protect your personal information.</p>
          
          <h5>Contact Us</h5>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:britomm23@gmail.com">britomm23@gmail.com</a></p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div>
          <p><strong>Last Updated:</strong> {new Date().getFullYear()}</p>
          
          <h5>Acceptance of Terms</h5>
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
          
          <h5>Services</h5>
          <p>I offer fullstack web development services including web development, React applications, UI/UX design, and technical consulting.</p>
          
          <h5>Intellectual Property</h5>
          <p>All content on this website, including text, graphics, and code, is my property and protected by copyright laws.</p>
          
          <h5>Limitation of Liability</h5>
          <p>I strive to provide accurate information, but I make no warranties about the completeness or accuracy of the content.</p>
          
          <h5>Contact</h5>
          <p>For questions about these terms, contact me at <a href="mailto:britomm23@gmail.com">britomm23@gmail.com</a></p>
        </div>
      )
    },
    sitemap: {
      title: "Sitemap",
      content: (
        <div>
          <h5>Website Navigation</h5>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li>🏠 <strong>Home</strong> - Welcome & Introduction</li>
            <li>👨‍💻 <strong>About</strong> - My background and story</li>
            <li>⚡ <strong>Skills</strong> - Technical abilities & expertise</li>
            <li>🚀 <strong>Projects</strong> - Portfolio of work</li>
            <li>💼 <strong>Experience</strong> - Professional journey</li>
            <li>📜 <strong>Certificates</strong> - Qualifications & certifications</li>
            <li>📞 <strong>Contact</strong> - Get in touch with me</li>
          </ul>
          
          <h5>External Links</h5>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li>🔗 LinkedIn - Professional network</li>
            <li>💻 GitHub - Code repositories</li>
            <li>🐦 X (Twitter) - Social updates</li>
            <li>📷 Instagram - Personal insights</li>
            <li>👥 Facebook - Social connection</li>
          </ul>
        </div>
      )
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const isPastHero = window.scrollY > heroBottom - 100;
        setShowScrollTop(isPastHero);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main py-5">
        <Container>
          <Row>
            {/* Brand & Description */}
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-brand">
                <h3 className="brand-name">Bright Momoh</h3>
                <p className="footer-description">
                  A passionate frontend developer creating beautiful, functional, 
                  and user-centered digital experiences. Let's build something amazing together!
                </p>
                <div className="footer-stats">
                  <div className="stat-item">
                    <FaCode className="stat-icon" />
                    <span>5+ Projects</span>
                  </div>
                  <div className="stat-item">
                    <FaCoffee className="stat-icon" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6} className="mb-4">
              <h5 className="footer-title">Quick Links</h5>
              <Nav className="footer-links">
                {quickLinks.map((link, index) => (
                  <Nav.Link 
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            {/* Services */}
            <Col lg={2} md={6} className="mb-4">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-services">
                {services.map((service, index) => (
                  <li key={index} className="service-item">
                    {service}
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={6} className="mb-4">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="footer-contact">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item"
                  >
                    <span className="contact-icon">{item.icon}</span>
                    <span className="contact-text">{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="footer-social">
                <h6 className="social-title">Follow Me</h6>
                <div className="footer-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.className}`}
                      title={social.name}
                    >
                      <span>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="newsletter">
                <h6 className="newsletter-title">Stay Updated</h6>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="copyright">
                © {currentYear} Bright Momoh. Made with <FaHeart className="heart-icon" /> using React & Bootstrap
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-bottom-links">
                <a 
                  href="#privacy" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal('privacy');
                  }}
                >
                  Privacy Policy
                </a>
                <span className="divider">|</span>
                <a 
                  href="#terms" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal('terms');
                  }}
                >
                  Terms of Service
                </a>
                <span className="divider">|</span>
                <a 
                  href="#sitemap" 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal('sitemap');
                  }}
                >
                  Sitemap
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modals */}
      {Object.keys(modalContent).map((modalKey) => (
        <Modal
          key={modalKey}
          show={showModal[modalKey]}
          onHide={() => toggleModal(modalKey)}
          size="lg"
          centered
          className="footer-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{modalContent[modalKey].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalContent[modalKey].content}
          </Modal.Body>
          <Modal.Footer>
            <button 
              className="modal-close-btn"
              onClick={() => toggleModal(modalKey)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      ))}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;