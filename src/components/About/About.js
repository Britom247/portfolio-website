import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserTie, FaGraduationCap, FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = {
    name: "Bright Momoh",
    title: "Full-Stack Web Developer",
    email: "britomm23@gmail.com",
    phone: "+234 707-972-4342",
    location: "Lagos, Nigeria",
    freelance: "Available",
    experience: "2+ Years",
    description: "I'm a passionate developer with 2+ years of experience creating modern web applications. I specialize in React, JavaScript, and responsive design."
  };

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '3+', label: 'Happy Clients' },
    { number: '0', label: 'Awards Won' },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.Eng)",
      institution: "Bells University of Technology",
      course: "Mechatronics Engineering",
      year: "2025 - 2030",
      description: "Currently pursuing degree while applying engineering problem-solving methodologies to software development."
    }
  ];

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
    <section id="about" className="about-section py-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-5">About Me</h2>
            <p className="section-subtitle text-center mb-5">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Profile Image Column */}
          <Col lg={4} className="mb-5">
            <div className="about-image-wrapper">
              <img 
                src="/images/profile-photo.png" 
                alt="Profile" 
                className="about-image img-fluid rounded-circle"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h5>{personalInfo.name}</h5>
                  <p>{personalInfo.title}</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Content Column */}
          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <h3 className="about-heading">Hello! I'm {personalInfo.name}</h3>
                <p className="about-description">
                  {personalInfo.description}
                </p>
                <p className="about-text">
                  I'm dedicated to creating exceptional digital experiences that combine 
                  beautiful design with robust functionality. My approach focuses on 
                  clean code, user-centered design, and continuous learning.
                </p>
              </Col>
            </Row>

            {/* Personal Info Grid */}
            <Row className="mt-4">
              <Col md={6}>
                <ul className="personal-info-list">
                  <li>
                    <strong>Name:</strong> {personalInfo.name}
                  </li>
                  <li>
                    <strong>Email:</strong> {personalInfo.email}
                  </li>
                  <li>
                    <strong>Phone:</strong> {personalInfo.phone}
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="personal-info-list">
                  <li>
                    <strong>Location:</strong> {personalInfo.location}
                  </li>
                  <li>
                    <strong>Freelance:</strong> 
                    <span className="text-success"> {personalInfo.freelance}</span>
                  </li>
                  <li>
                    <strong>Experience:</strong> {personalInfo.experience}
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Action Buttons */}
            <Row className="mt-4">
              <Col lg={12}>
                <Button variant="primary" className="me-3" onClick={handleDownloadCV}>
                  <FaDownload className="me-2" />
                  Download CV
                </Button>
                <Button variant="outline-primary" onClick={scrollToProjects}>
                  View Portfolio
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section mt-5 py-4">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="text-center mb-4">
              <div className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Education & Certifications */}
        <Row className="mt-5">
          {/* Education Column */}
          <Col lg={6}>
            <Card className="h-100 education-card">
              <Card.Header className="bg-primary fs-4 text-white">
                <FaGraduationCap className="me-2" />
                Education
              </Card.Header>
              <Card.Body>
                {education.map((edu, index) => (
                  <div key={index} className="education-item mb-4">
                    <h5 className="education-degree">{edu.degree}</h5>
                    <p className="education-institution fs-5 text-muted mb-1">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="education-course text-muted fs-5 mb-1">
                      <em>{edu.course}</em>
                    </p>
                    <p className="education-description text-muted small">
                      {edu.description}
                    </p>
                    {index < education.length - 1 && <hr />}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Passion Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="passion-card">
              <Card.Body className="text-center">
                <FaUserTie size={48} className="text-primary mb-3" />
                <h4>My Passion</h4>
                <p className="passion-text">
                  I believe in the power of technology to transform businesses and improve lives. 
                  My passion lies in creating solutions that are not only functional but also 
                  delightful to use. I'm constantly exploring new technologies and methodologies 
                  to stay at the forefront of web development.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;