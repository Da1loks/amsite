import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <Link to="/" className="brand">Amethyst</Link>
          <div className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <i className="fas fa-home"></i>
              Главная
            </Link>
            <Link to="/rules" className={`nav-link ${location.pathname === '/rules' ? 'active' : ''}`}>
              <i className="fas fa-gavel"></i>
              Правила
            </Link>
          </div>
        </div>


        <button 
          className="burger-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar; 