import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard',
      technologies: ['Vue.js', 'Chart.js', 'API Integration'],
      image: '/api/placeholder/400/250'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>My Projects</motion.h2>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    Project Image
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <button className="btn btn-primary">Live Demo</button>
                    <button className="btn">Source Code</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;