import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCode, FaMobile, FaServer, FaGlobe, FaSearch, FaRegFrown, FaLaptopCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Developed Noureesh Foods, a responsive React-powered multi-page e-commerce website, styled with Bootstrap and custom CSS, showcasing food products with an engaging UI/UX, and deployed on Netlify via GitHub CI/CD.',
      image: '/images/projects/project01.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Paystack', 'GitHub', 'Netlify'],
      category: 'fullstack',
      liveUrl: 'noureesh-foods.netlify.app',
      githubUrl: 'https://github.com/Britom247'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'This portfolio website is a React-powered single-page application (SPA) styled with Bootstrap & custom CSS, enhanced with animations and icons, connected to EmailJS for contact, and deployed on Netlify with GitHub-based CI/CD.',
      image: '/images/projects/project02.png',
      technologies: ['React', 'Bootstrap', 'CSS', 'EmailJS', 'GitHub', 'Netlify'],
      category: 'frontend',
      liveUrl: 'bright-momoh.netlify.app',
      githubUrl: 'https://github.com/Britom247/portfolio-website'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Category configurations
  const categories = [
    { key: 'all', label: 'All Projects', icon: <FaGlobe />, count: projects.length },
    { key: 'frontend', label: 'Frontend', icon: <FaLaptopCode />, count: projects.filter(p => p.category === 'frontend').length },
    { key: 'fullstack', label: 'Full Stack', icon: <FaCode />, count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'backend', label: 'Backend', icon: <FaServer />, count: projects.filter(p => p.category === 'backend').length },
    { key: 'mobile', label: 'Mobile', icon: <FaMobile />, count: projects.filter(p => p.category === 'mobile').length }
  ];

  // Fallback components
  const NoProjectsFallback = () => (
    <div className="no-projects-fallback text-center py-5">
      <FaRegFrown className="fallback-icon mb-3" />
      <h4 className="fallback-title">No Projects Available</h4>
      <p className="fallback-description">
        I'm currently working on some amazing projects that will be added here soon. 
        Check back later to see my latest work, or feel free to contact me to discuss potential collaborations.
      </p>
      <div className="fallback-actions mt-4">
        <Button 
          variant="primary"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Start a Project With Me
        </Button>
      </div>
    </div>
  );

  const NoFilteredProjectsFallback = () => (
    <div className="no-filtered-projects-fallback text-center py-5">
      <FaSearch className="fallback-icon mb-3" />
      <h4 className="fallback-title">No {categories.find(cat => cat.key === filter)?.label} Projects</h4>
      <p className="fallback-description">
        {filter === 'all' 
          ? "I haven't added any projects to my portfolio yet, but I'm working on some exciting ones!"
          : `I don't have any ${categories.find(cat => cat.key === filter)?.label.toLowerCase()} projects in my portfolio yet. 
             Check out my other projects or contact me to discuss ${categories.find(cat => cat.key === filter)?.label.toLowerCase()} development.`
        }
      </p>
      <div className="fallback-actions mt-4">
        <Button 
          variant="outline-primary" 
          className="me-3"
          onClick={() => setFilter('all')}
        >
          View All Projects
        </Button>
        <Button 
          variant="primary"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Discuss Project
        </Button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-3">Featured Projects</h2>
            <p className="section-subtitle text-center mb-5">
              A collection of my recent work and personal projects
            </p>
          </Col>
        </Row>
        
        {/* Filter Buttons */}
        <Row className="mb-4">
          <Col lg={12} className="text-center">
            {categories.map(category => (
              <Button
                key={category.key}
                variant={filter === category.key ? 'primary' : 'outline-primary'}
                className="me-2 mb-2 filter-btn"
                onClick={() => setFilter(category.key)}
              >
                <span className="filter-btn-content">
                  {category.icon}
                  <span className="filter-text">{category.label}</span>
                  {category.count > 0 && (
                    <Badge bg="light" text="dark" className="ms-1 count-badge">
                      {category.count}
                    </Badge>
                  )}
                </span>
              </Button>
            ))}
          </Col>
        </Row>

        {/* Projects Grid or Fallback */}
        <Row>
          {projects.length === 0 ? (
            <Col lg={12}>
              <NoProjectsFallback />
            </Col>
          ) : filteredProjects.length === 0 ? (
            <Col lg={12}>
              <NoFilteredProjectsFallback />
            </Col>
          ) : (
            filteredProjects.map(project => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
                <Card className="project-card h-100">
                  <div className="project-image-container">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      className="project-image"
                      onError={(e) => {
                        e.target.src = '/images/projects/placeholder.png';
                      }}
                    />
                    <div className="project-category-badge">
                      {categories.find(cat => cat.key === project.category)?.icon}
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-description">{project.description}</Card.Text>
                    <div className="project-technologies mb-3">
                      {project.technologies.map(tech => (
                        <Badge key={tech} bg="secondary" className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="project-links mt-auto">
                      <Button 
                        variant="primary" 
                        className="me-2" 
                        size="sm" 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline-dark" 
                        size="sm" 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Call to Action */}
        {projects.length > 0 && (
          <Row className="mt-5">
            <Col lg={12} className="text-center">
              <div className="projects-cta">
                <h5>Interested in working together?</h5>
                <p className="text-muted mb-3">
                  I'm always open to discussing new opportunities and creative projects
                </p>
                <Button 
                  variant="outline-primary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Build Something Amazing
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Projects;