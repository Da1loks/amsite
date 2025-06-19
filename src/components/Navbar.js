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
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <button 
          className="burger-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <i className="fas fa-bars"></i>
        </button>

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
            <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}>
              <i className="fas fa-calendar-alt"></i>
              События
            </Link>
            <Link to="/wiki" className={`nav-link ${location.pathname === '/wiki' ? 'active' : ''}`}>
              <i className="fas fa-book"></i>
              Вики
            </Link>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar; 