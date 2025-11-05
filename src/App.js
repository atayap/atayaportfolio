import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="App">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <main>
        {/* Home Section */}
        <section id="home">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Hero scrollToSection={scrollToSection} />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <About />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Skills />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;