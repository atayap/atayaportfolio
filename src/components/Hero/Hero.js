import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = ({ scrollToSection }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="hero-greeting"
          >
            Hello, I'm
          </motion.h1>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="hero-name"
          >
            ATAYA FIKRI R.P
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="hero-description"
          >
            Software Engineer | Web Developer | Problem Solver
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.button
              className="btn"
              onClick={() => window.open('/resume.pdf', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
          variants={scrollVariants}
          initial="hidden"
          animate="visible"
        >
          ↓
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
