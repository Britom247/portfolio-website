import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCode, FaMobile, FaServer, FaGlobe, FaSearch, FaRegFrown, FaLaptopCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isSliding, setIsSliding] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'This portfolio website is a React-powered single-page application (SPA) styled with Bootstrap & custom CSS, enhanced with animations and icons, connected to EmailJS for contact, and deployed on Netlify with GitHub-based CI/CD.',
      image: '/images/projects/project02.png',
      technologies: ['React', 'Bootstrap', 'CSS', 'EmailJS', 'GitHub', 'Netlify'],
      category: 'frontend',
      liveUrl: 'https://bright-momoh.netlify.app',
      githubUrl: 'https://github.com/Britom247/portfolio-website'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Developed Noureesh Foods, a responsive React-powered multi-page e-commerce website, styled with Bootstrap and custom CSS, showcasing food products with an engaging UI/UX, and deployed on Netlify via GitHub CI/CD.',
      image: '/images/projects/project01.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Paystack', 'GitHub', 'Netlify'],
      category: 'fullstack',
      liveUrl: 'https://noureesh-foods.netlify.app',
      githubUrl: 'https://github.com/Britom247'
    },
    {
      id: 3,
      title: 'DailyCrest Blog Platform',
      description: 'Built DailyCrest, a full-stack blogging platform with dynamic post retrieval, pagination, and RESTful APIs. Developed with React, Node.js, Express, and MongoDB Atlas, and deployed on Netlify and Render via GitHub CI/CD.',
      image: '/images/projects/project03.png',
      technologies: ['React', 'Node.js', 'MongoDB Atlas', 'Express', 'Axios', 'GitHub', 'Netlify', 'Render'],
      category: 'fullstack',
      liveUrl: 'https://dailycrest.click',
      githubUrl: 'https://github.com/Britom247/DailyCrest-Blog'
    },
    {
      id: 4,
      title: 'Amtowa Website',
      description: 'Launched the Amtowa website for a client, delivering a responsive full-stack build with smooth UX and production deployment.',
      image: '/images/projects/project04.png',
      technologies: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'GitHub', 'Netlify', 'Google Maps Embed'],
      category: 'frontend',
      liveUrl: 'https://amtowatherapy.com',
      githubUrl: 'https://github.com/Britom247/Amtowa-Therapy'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1200) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const getVisibleProjects = () => {
    if (filteredProjects.length <= cardsPerView) {
      return filteredProjects;
    }

    return Array.from({ length: cardsPerView }, (_, offset) => {
      const index = (currentIndex + offset) % filteredProjects.length;
      return filteredProjects[index];
    });
  };

  const visibleProjects = getVisibleProjects();

  const goNext = () => {
    setSlideDirection('next');
    setIsSliding(true);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const goPrev = () => {
    setSlideDirection('prev');
    setIsSliding(true);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    if (!isSliding) {
      return undefined;
    }

    const timer = setTimeout(() => setIsSliding(false), 280);
    return () => clearTimeout(timer);
  }, [isSliding]);

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null || cardsPerView !== 1) {
      return;
    }

    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      goNext();
    } else if (swipeDistance < -minSwipeDistance) {
      goPrev();
    }
  };

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
            <Col lg={12}>
              <div className="projects-carousel-wrapper">
                {filteredProjects.length > 1 && (
                  <Button
                    variant="light"
                    className="carousel-arrow carousel-arrow-left"
                    onClick={goPrev}
                    aria-label="Previous projects"
                  >
                    <FaChevronLeft />
                  </Button>
                )}

                <Row className="projects-carousel-row">
                  {visibleProjects.map(project => (
                    <Col
                      lg={12 / cardsPerView}
                      md={12 / cardsPerView}
                      key={project.id}
                      className={`mb-4 ${isSliding ? `slide-${slideDirection}` : ''}`}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
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
                  ))}
                </Row>

                {filteredProjects.length > 1 && (
                  <Button
                    variant="light"
                    className="carousel-arrow carousel-arrow-right"
                    onClick={goNext}
                    aria-label="Next projects"
                  >
                    <FaChevronRight />
                  </Button>
                )}
              </div>
            </Col>
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
