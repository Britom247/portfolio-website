import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaFileDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Hero.css';

const Hero = () => {
  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = '/images/documents/Bright_Momoh_CV.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Bright_Momoh_FullStack_Developer_CV.pdf');
    document.body.appendChild(link);

    if (typeof link.download !== 'undefined') {
      link.click();
    } else {
      window.open(cvUrl, '_blank', 'noopener');
    }

    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={12}>
            <Card className="hero-card">
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Hi, I'm <span className="text-primary">Bright Momoh</span>
                    </h1>
                    <h2 className="hero-subtitle">
                      I'm a{' '}
                      <ReactTyped
                        strings={['Full-stack Web Developer', 'React Specialist', 'UI/UX Enthusiast']}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                      />
                    </h2>
                    <p className="hero-description">
                      I create beautiful, responsive web applications with modern technologies. 
                      Passionate about clean code and user experience.
                    </p>
                    <div className="hero-buttons">
                      <Button variant="primary" size="lg" onClick={handleDownloadCV}>
                        <FaFileDownload className="me-2" />
                        Download CV
                      </Button>
                      <Button variant="outline-primary" size="lg" onClick={scrollToProjects}>
                        View Projects
                      </Button>
                    </div>
                    <div className="hero-social-links">
                      <a href="https://www.linkedin.com/in/bright-momoh-9997652a3/" className="hero-social-link social-linkedin">
                        <FaLinkedin />
                      </a>
                      <a href="https://github.com/Britom247" className="hero-social-link social-github">
                        <FaGithub />
                      </a>
                      <a href="https://x.com/bright_mom62851/" className="hero-social-link social-twitter">
                        <FaXTwitter />
                      </a>
                      <a href="https://www.instagram.com/t_britoo247/" className="hero-social-link social-instagram">
                        <FaInstagram />
                      </a>
                      <a href="https://facebook.com/profile.php?id=61566911621152" className="hero-social-link social-facebook">
                        <FaFacebook />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="hero-image">
                    <img 
                      src="/images/profile-photo.png" 
                      alt="Bright Momoh - Full Stack Developer" 
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;