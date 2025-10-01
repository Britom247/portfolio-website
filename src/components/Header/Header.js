import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setExpanded(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    scrollToSection('home');
    setExpanded(false);
  };

  const handleNavLinkClick = (sectionId) => (e) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setExpanded(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
      variant="light"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="brand-name"
          onClick={handleBrandClick}
        >
          Bright Momoh
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={handleNavLinkClick('home')}
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleNavLinkClick('about')}
            >
              About
            </Nav.Link>
            
            <Nav.Link 
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleNavLinkClick('skills')}
            >
              Skills
            </Nav.Link>
            
            <Nav.Link 
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleNavLinkClick('projects')}
            >
              Projects
            </Nav.Link>
            
            <Nav.Link 
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={handleNavLinkClick('experience')}
            >
              Experience
            </Nav.Link>
            
            <Nav.Link 
              href="#certificates"
              className={activeSection === 'certificates' ? 'active' : ''}
              onClick={handleNavLinkClick('certificates')}
            >
              Certificates
            </Nav.Link>
            
            <Button 
              className="contact-btn"
              onClick={handleContactClick}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;