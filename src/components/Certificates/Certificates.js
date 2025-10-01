import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      id: 1,
      title: "The Ultimate 2025 Fullstack Web Development Bootcamp",
      issuer: "Udemy",
      credentialId: "UC-67b21947-df4e-499f-93a3-0a75106e4a24",
      description: "This certifies the successful completion of The Ultimate 2025 Fullstack Web Development Bootcamp certification",
      image: "/images/certificates/udemy-fullstack.png",
      verificationUrl: "https://ude.my/UC-67b21947-df4e-499f-93a3-0a75106e4a24"
    },
    {
      id: 2,
      title: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn Learning",
      credentialId: "a0554cb712ba4d7fce64793c9f74485d362f67a9751be5ad20a47a36f0fcb3c0",
      description: " Completed Introduction to Career Skills in Software Development certification",
      image: "/images/certificates/LL-01.png",
      verificationUrl: "https://www.linkedin.com/learning/certificates/a0554cb712ba4d7fce64793c9f74485d362f67a9751be5ad20a47a36f0fcb3c0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLALXwsTfTMqclo14D2vT%2FA%3D%3D"
    },
    {
      id: 3,
      title: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn Learning",
      credentialId: "6679ce4d4b0e3828dec89bef0a9a9415cac9ca9aa754bab403a6b8beee8507b8",
      description: "Completed Programming Foundations: Fundamentals certification",
      image: "/images/certificates/LL-02.png",
      verificationUrl: "https://www.linkedin.com/learning/certificates/6679ce4d4b0e3828dec89bef0a9a9415cac9ca9aa754bab403a6b8beee8507b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLALXwsTfTMqclo14D2vT%2FA%3D%3D"
    },
    {
      id: 4,
      title: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn Learning",
      credentialId: "d270e2431402d82665a80a9ced53296847e8a92433d6435d2cb3bdf501248f79",
      description: "Completed Programming Foundations: Beyond the Fundamentals certification",
      image: "/images/certificates/LL-03.png",
      verificationUrl: "https://www.linkedin.com/learning/certificates/d270e2431402d82665a80a9ced53296847e8a92433d6435d2cb3bdf501248f79?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0Ib2xM3gQ1Ou5tp7dFRL6w%3D%3D"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, certificates.length]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(true);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(true);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(true);
  };

  const handleDownload = () => {
    const currentCert = certificates[activeIndex];
    const fileUrl = currentCert.image;

    const sanitize = (str) =>
      str
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_\-.]/g, '')
        .replace(/_+/g, '_')
        .trim();

    const extMatch = fileUrl.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/);
    const ext = extMatch ? extMatch[1] : 'png';

    const filename = `${sanitize(currentCert.issuer)}-${sanitize(currentCert.title)}.${ext}`;

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', filename);
    document.body.appendChild(link);

    if (typeof link.download !== 'undefined') {
      link.click();
    } else {
      window.open(fileUrl, '_blank', 'noopener');
    }

    document.body.removeChild(link);
  };

  const handleVerification = () => {
    const currentCert = certificates[activeIndex];
    window.open(currentCert.verificationUrl, '_blank');
  };

  return (
    <section id="certificates" className="certificates-section py-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-3">Certificates</h2>
            <p className="section-subtitle text-center mb-5">
              My professional certifications and achievements
            </p>
          </Col>
        </Row>

        {/* Main Carousel Content */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="certificate-carousel-wrapper">
              
              {/* Certificate Display Area */}
              <div className="certificate-display-area">
                <div className="certificate-frame">
                  <img 
                    src={certificates[activeIndex].image} 
                    alt={certificates[activeIndex].title}
                    className="certificate-image"
                    onClick={() => setShowModal(true)}
                  />
                  
                  {/* Certificate Info Overlay */}
                  <div className="certificate-info">
                    <div className="issuer-logo">
                      <span className="issuer-badge">{certificates[activeIndex].issuer}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Carousel Controls */}
              <div className="carousel-controls">
                <Button 
                  variant="outline-primary" 
                  className="control-btn prev-btn"
                  onClick={handlePrevious}
                >
                  <FaChevronLeft />
                </Button>
                
                <Button 
                  variant="outline-primary" 
                  className="control-btn next-btn"
                  onClick={handleNext}
                >
                  <FaChevronRight />
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <Button 
                  variant="primary" 
                  className="action-btn"
                  onClick={handleDownload}
                >
                  <FaDownload className="me-2" />
                  Download Certificate
                </Button>
                <Button 
                  variant="outline-primary" 
                  className="action-btn"
                  onClick={handleVerification}
                >
                  <FaExternalLinkAlt className="me-2" />
                  Verify Online
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Certificate Thumbnails */}
        <Row className="mt-4">
          <Col lg={12}>
            <div className="certificate-thumbnails">
              {certificates.map((certificate, index) => (
                <div 
                  key={certificate.id}
                  className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                >
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="thumbnail-image"
                  />
                  <div className="thumbnail-overlay">
                    <span className="thumbnail-title">{certificate.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for Full-size Certificate View */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
        className="certificate-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{certificates[activeIndex].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img 
            src={certificates[activeIndex].image} 
            alt={certificates[activeIndex].title}
            className="img-fluid"
            style={{maxHeight: '70vh', objectFit: 'contain'}}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleDownload}>
            <FaDownload className="me-2" />
            Download
          </Button>
          <Button variant="primary" onClick={handleVerification}>
            <FaExternalLinkAlt className="me-2" />
            Verify Certificate
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Certificates;