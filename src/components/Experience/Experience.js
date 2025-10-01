import React, { useState } from 'react';
import { Container, Row, Col, Card, Tab, Tabs, Badge, Button } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaRegFrown, FaSearch } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const professionalExperience = [
    // {
    //   id: 1,
    //   title: "Senior Frontend Developer",
    //   company: "Tech Innovations Inc.",
    //   period: "2022 - Present",
    //   location: "San Francisco, CA",
    //   type: "Full-time",
    //   description: "Lead frontend development for enterprise-level applications using React and TypeScript.",
    //   achievements: [
    //     "Led a team of 5 developers in building a scalable SaaS platform",
    //     "Improved application performance by 40% through code optimization",
    //     "Mentored junior developers and established coding standards",
    //     "Implemented CI/CD pipelines reducing deployment time by 60%"
    //   ],
    //   technologies: ["React", "TypeScript", "Node.js", "AWS", "MongoDB"],
    //   logo: "/images/tech-innovations-logo.png"
    // }
  ];

  const freelanceProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "Noureesh Foods",
      period: "2025",
      description: "Developed Noureesh Foods, a responsive React-powered multi-page e-commerce website, styled with Bootstrap and custom CSS, showcasing food products with an engaging UI/UX, and deployed on Netlify via GitHub CI/CD.",
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Paystack', 'GitHub', 'Netlify'],
      link: "noureesh-foods.netlify.app",
      status: "Completed"
    },
  ];

  // Fallback components
  const NoProfessionalExperience = () => (
    <div className="no-experience-fallback text-center py-5">
      <FaSearch className="fallback-icon text-dark mb-3" />
      <h4 className="fallback-title">No Professional Experience Yet</h4>
      <p className="fallback-description text-dark">
        I'm actively seeking opportunities to grow my professional career. 
        While I haven't worked in a corporate setting yet, I've gained valuable 
        experience through freelance projects and personal development.
      </p>
      <div className="fallback-actions mt-4">
        <Button 
          variant="outline-light" 
          className="me-3"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          View My Projects
        </Button>
        <Button 
          variant="light"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Hire Me
        </Button>
      </div>
    </div>
  );

  const NoFreelanceExperience = () => (
    <div className="no-experience-fallback text-center py-5">
      <FaRegFrown className="fallback-icon text-dark mb-3" />
      <h4 className="fallback-title">No Freelance Projects Available</h4>
      <p className="fallback-description text-dark">
        I'm currently working on building my freelance portfolio. 
        Check back soon to see my latest projects, or feel free to 
        contact me to discuss potential collaborations.
      </p>
      <div className="fallback-actions mt-4">
        <Button 
          variant="outline-light"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Start a Project
        </Button>
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-3">Work Experience</h2>
            <p className="section-subtitle text-center mb-5">
              My professional journey and achievements throughout the years
            </p>
          </Col>
        </Row>

        {/* Experience Tabs */}
        <Row>
          <Col lg={12}>
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="experience-tabs mb-5"
            >
              <Tab eventKey="professional" title={
                <span>
                  <FaBriefcase className="me-2" />
                  Professional
                  {professionalExperience.length > 0 && (
                    <Badge bg="light" text="dark" className="ms-2">
                      {professionalExperience.length}
                    </Badge>
                  )}
                </span>
              }>
                {professionalExperience.length > 0 ? (
                  <div className="timeline-experience">
                    {professionalExperience.map((exp, index) => (
                      <ExperienceCard key={exp.id} experience={exp} index={index} />
                    ))}
                  </div>
                ) : (
                  <NoProfessionalExperience />
                )}
              </Tab>

              <Tab eventKey="freelance" title={
                <span>
                  <FaCode className="me-2" />
                  Freelance
                  {freelanceProjects.length > 0 && (
                    <Badge bg="light" text="dark" className="ms-2">
                      {freelanceProjects.length}
                    </Badge>
                  )}
                </span>
              }>
                {freelanceProjects.length > 0 ? (
                  <Row>
                    {freelanceProjects.map(project => (
                      <Col lg={6} key={project.id} className="mb-4">
                        <FreelanceProjectCard project={project} />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <NoFreelanceExperience />
                )}
              </Tab>
            </Tabs>
          </Col>
        </Row>

        {/* Statistics Section */}
        <Row className="stats-row mt-5">
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="experience-stat">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label text-white">Years Experience</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="experience-stat">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label text-white">Projects Completed</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="experience-stat">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label text-white">Happy Clients</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="experience-stat">
              <h3 className="stat-number">7+</h3>
              <p className="stat-label text-white">Technologies</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  return (
    <div className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="experience-content">
        <Card className="experience-card">
          <Card.Body>
            <Row className="align-items-start">
              <Col md={2} className="text-center mb-3">
                <div className="company-logo">
                  <img 
                    src={experience.logo} 
                    alt={experience.company}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={10}>
                <div className="experience-header">
                  <h4 className="job-title">{experience.title}</h4>
                  <h5 className="company-name text-primary">{experience.company}</h5>
                  <div className="experience-meta">
                    <span className="period">
                      <FaCalendarAlt className="me-1" />
                      {experience.period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt className="me-1" />
                      {experience.location}
                    </span>
                    <Badge bg="secondary" className="job-type">
                      {experience.type}
                    </Badge>
                  </div>
                </div>

                <p className="job-description">{experience.description}</p>

                <div className="achievements">
                  <h6>Key Achievements:</h6>
                  <ul>
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h6>Technologies Used:</h6>
                  <div className="tech-tags">
                    {experience.technologies.map(tech => (
                      <Badge key={tech} bg="outline-primary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div className="timeline-marker">
        <div className="marker-dot"></div>
        <div className="marker-line"></div>
      </div>
    </div>
  );
};

// Freelance Project Card Component
const FreelanceProjectCard = ({ project }) => {
  return (
    <Card className="freelance-card h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="project-title">{project.title}</h5>
            <p className="client-name text-dark">{project.client}</p>
          </div>
          <Badge bg={project.status === 'Completed' ? 'success' : 'warning'}>
            {project.status}
          </Badge>
        </div>
        
        <p className="project-description text-dark">{project.description}</p>
        
        <div className="project-meta">
          <span className="period">
            <FaCalendarAlt className="me-1" />
            {project.period}
          </span>
        </div>

        <div className="technologies mt-3">
          {project.technologies.map(tech => (
            <Badge key={tech} bg="light" text="dark" className="me-1 mb-1">
              {tech}
            </Badge>
          ))}
        </div>

        <Button variant="outline-info" size="sm" className="mt-3" href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
          View Project <FaExternalLinkAlt className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Experience;