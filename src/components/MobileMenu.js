import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <img src="/amethyst.png" alt="Logo" width="42" height="42" />
          <span className="brand">Amethyst</span>
        </div>

        <div className="mobile-nav-group">
          <Link to="/" className="mobile-nav-link" onClick={onClose}>
            <i className="fas fa-home"></i>
            Главная
          </Link>
          <Link to="/rules" className="mobile-nav-link" onClick={onClose}>
            <i className="fas fa-gavel"></i>
            Правила
          </Link>
          <Link to="/events" className="mobile-nav-link" onClick={onClose}>
            <i className="fas fa-star"></i>
            События
          </Link>
        </div>

        <div className="mobile-nav-group">
          <a href="https://t.me/your-channel" className="mobile-nav-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
            Telegram канал
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 