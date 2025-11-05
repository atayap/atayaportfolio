import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.scss';

const About = () => {
  const [currentRatingIndex, setCurrentRatingIndex] = useState(0);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Data rating dan testimoni
  const ratings = [
    { 
      name: "Hendra", 
      role: "Keren poll Kak", 
      stars: 5,
      country: "Indonesia"
    },
    { 
      name: "Pelanggan", 
      role: "Deadline Tepat Waktu kak", 
      stars: 5,
      country: "Indonesia"
    },
    { 
      name: "Pandu", 
      role: "Semangat ya kak, Saya kasih bintang lima", 
      stars: 5,
      country: "Indonesia"
    },
    { 
      name: "Amel", 
      role: "Aku suka sama hasil nya mas, Jos Jis", 
      stars: 4,
      country: "Indonesia"
    }
  ];

  // Auto-rotate ratings setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRatingIndex((prevIndex) => 
        prevIndex === ratings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [ratings.length]);

  // Fungsi untuk render bintang
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < count ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  const currentRating = ratings[currentRatingIndex];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          
          <motion.div className="about-grid" variants={itemVariants}>
            <div className="about-text">
              <p>
                I'm a passionate Software Engineer with a strong focus on building modern, responsive, and functional web applications. I've been exploring the world of programming since 2023, constantly improving my skills in both frontend and backend development using technologies like React.js, Angular, Node.js, PHP, Python, and JavaScript.
              </p>
              
              <p>
                With an eye for design and attention to detail, I combine creativity and clean code to deliver seamless digital experiences. From crafting elegant interfaces in Figma to solving complex backend issues, I aim to bridge the gap between design and technology bringing ideas to life through code.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <h3>12+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>4.8/5</h3>
                  <p>Client Rating</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="about-image-section"
              variants={imageVariants}
            >
              {/* Foto Profile Kotak */}
              <div className="profile-image-container">
                <img 
                  src="/images/profile.png" 
                  alt="Ataya Fikri"
                  className="profile-image-rectangular"
                />
                
                {/* Rating Card Kecil di pojok kanan bawah */}
                <motion.div 
                  className="rating-card-small"
                  initial={{ opacity: 0, scale: 0.8, x: 10, y: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRatingIndex}
                      className="rating-content-small"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* PERBAIKAN: Country dan stars lebih dekat */}
                      <div className="rating-header-small">
                        <span className="country-name">{currentRating.country}</span>
                        <div className="rating-stars-small">
                          {renderStars(currentRating.stars)}
                        </div>
                      </div>
                      
                      <div className="rating-info-small">
                        <span className="client-name-small">{currentRating.name}</span>
                        <span className="client-role-small">{currentRating.role}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Rating indicator dots */}
                  <div className="rating-indicators-small">
                    {ratings.map((_, index) => (
                      <div 
                        key={index}
                        className={`indicator-small ${index === currentRatingIndex ? 'active' : ''}`}
                        onClick={() => setCurrentRatingIndex(index)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;