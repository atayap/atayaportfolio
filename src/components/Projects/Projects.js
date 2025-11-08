// src/components/Projects/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

// Import gambar project
import project1 from './project/Project1.png';
import project2 from './project/Project2.png';
import project3 from './project/Project3.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Chicken Shop Aypo',
      description: 'This website is built using ReactJS and Node.js. The theme of this website is a Chicken Shop.',
      technologies: ['React', 'Node.js', 'VScode', 'JavaScript', 'GitHub'],
      image: project1,
      liveDemo: 'https://atayap.github.io/tokoaypo/',
      sourceCode: 'https://github.com/atayap/tokoaypo'
    },
    {
      id: 2,
      title: 'Fashion Website',
      description: 'The website I created based on ChatGPT wishes',
      technologies: ['React', 'Node.js', 'VScode', 'JavaScript', 'GitHub'],
      image: project2,
      liveDemo: 'https://atayap.github.io/fashion-website',
      sourceCode: 'https://github.com/atayap/fashion-website'
    },
    {
      id: 3,
      title: 'Mahasiswa Manager',
      description: 'This website is just an example of providing personal information of students.',
      technologies: ['Php', 'MySQL', 'Github', 'InfinityFree', 'Xampp', 'VScode'],
      image: project3,
      liveDemo: 'https://mahasiswa.kesug.com/',
      sourceCode: 'https://github.com/atayap/mahasiswa-manager'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
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
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Source Code
                    </a>
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
