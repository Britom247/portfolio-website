import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaCode, FaUsers, FaLightbulb, FaEdit, FaProjectDiagram, FaSyncAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { 
      name: 'React', 
      level: 90, 
      icon: <FaReact />,
      color: '#61DAFB'
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: <FaJs />,
      color: '#F7DF1E'
    },
    { 
      name: 'HTML5', 
      level: 95, 
      icon: <FaHtml5 />,
      color: '#E34F26'
    },
    { 
      name: 'CSS3', 
      level: 90, 
      icon: <FaCss3Alt />,
      color: '#1572B6'
    },
    { 
      name: 'Node.js', 
      level: 75, 
      icon: <FaNodeJs />,
      color: '#339933'
    },
    { 
      name: 'Bootstrap', 
      level: 88, 
      icon: <FaBootstrap />,
      color: '#7952B3'
    },
    { 
      name: 'Git', 
      level: 80, 
      icon: <FaGitAlt />,
      color: '#F05032'
    },
    { 
      name: 'MongoDB', 
      level: 72, 
      icon: <SiMongodb />,
      color: '#47A248'
    }
  ];

  const professionalSkills = [
    { 
      name: 'Problem Solving', 
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative solutions'
    },
    { 
      name: 'Team Collaboration', 
      icon: <FaUsers />,
      description: 'Effective communication and teamwork'
    },
    { 
      name: 'Agile Methodology', 
      icon: <FaSyncAlt />,
      description: 'Scrum and iterative development'
    },
    { 
      name: 'Code Review', 
      icon: <FaCode />,
      description: 'Quality assurance and best practices'
    },
    { 
      name: 'Technical Writing', 
      icon: <FaEdit />,
      description: 'Clear documentation and communication'
    },
    { 
      name: 'Project Management', 
      icon: <FaProjectDiagram />,
      description: 'Planning and execution'
    }
  ];

  const toolsTechnologies = [
    'VS Code', 'GitHub', 'Netlify', 'Render', 'Figma', 'Cloudinary', 'Chrome DevTools', 
    'API', 'NPM', 'Webpack', 'ESLint', 'Prettier'
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-3">Skills & Expertise</h2>
            <p className="section-subtitle text-center mb-5">
              Technologies I work with and professional competencies I bring to every project
            </p>
          </Col>
        </Row>

        {/* Technical Skills */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="skills-card">
              <Card.Body className="p-4">
                <h3 className="skills-category-title text-center mb-4">
                  <FaCode className="me-2" />
                  Technical Skills
                </h3>
                <Row>
                  {technicalSkills.map((skill, index) => (
                    <Col lg={6} key={index} className="mb-4">
                      <div className="technical-skill-item">
                        <div className="skill-header">
                          <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </div>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          className="skill-progress"
                          style={{ '--skill-color': skill.color }}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Professional Skills */}
          <Col lg={6} className="mb-4">
            <Card className="skills-card h-100">
              <Card.Body className="p-4">
                <h3 className="skills-category-title text-center mb-4">
                  <FaUsers className="me-2" />
                  Professional Skills
                </h3>
                <Row>
                  {professionalSkills.map((skill, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="professional-skill-item">
                        <div className="professional-skill-icon">
                          {skill.icon}
                        </div>
                        <div className="professional-skill-content">
                          <h6 className="professional-skill-name">{skill.name}</h6>
                          <p className="professional-skill-description">{skill.description}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Tools & Technologies */}
          <Col lg={6} className="mb-4">
            <Card className="skills-card h-100">
              <Card.Body className="p-4">
                <h3 className="skills-category-title text-center mb-4">
                  <FaProjectDiagram className="me-2" />
                  Tools & Technologies
                </h3>
                <div className="tools-container">
                  {toolsTechnologies.map((tool, index) => (
                    <span key={index} className="tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Additional Info */}
                <div className="skills-summary mt-4">
                  <h6 className="summary-title">What I Bring</h6>
                  <ul className="summary-list">
                    <li>Clean, maintainable code following best practices</li>
                    <li>Responsive and accessible web applications</li>
                    <li>Performance optimization and SEO best practices</li>
                    <li>Cross-browser compatibility and testing</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-4">
          <Col lg={12} className="text-center">
            <div className="skills-cta">
              <p className="cta-text">
                Interested in how my skills can benefit your project? 
                <span role="button" className="cta-highlight" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> Let's discuss your requirements!</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;