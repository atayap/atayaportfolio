import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  // WhatsApp configuration
  const whatsappNumber = '6281234567890';
  const whatsappMessage = 'Halo, saya tertarik dengan portfolio Anda!';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="nav">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          Ataya Fikri©️
        </motion.div>
        
        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="underline"
                    layoutId="underline"
                  />
                )}
              </button>
            </li>
          ))}
          
          <li className="nav-item">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <span className="whatsapp-icon">📱</span>
              Contact WA
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div 
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="mobile-menu-content">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-link--active' : ''}`}
                      onClick={() => handleMenuClick(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-whatsapp-link"
                    onClick={handleWhatsAppClick}
                  >
                    <span className="whatsapp-icon">📱</span>
                    Contact WA
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;