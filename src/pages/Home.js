import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CodeBrackets from '../components/CodeBrackets';
import '../styles/Home.css';

function Home() {
  useEffect(() => {
    document.title = 'RassvetTeam';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="home-page">
      <div className="topbar">
        <div className="topbar-content">
          <a href="/" className="topbar-logo">
            RassvetTeam
          </a>
        </div>
      </div>

      <div className="content">
        <div className="logo">
          <CodeBrackets />
          <h1 className="logo-text">RassvetTeam</h1>
        </div>
        
        <p className="description">
          Это команда увлечённых разработчиков, стремящихся создать что-то новое. Мы хотим, чтобы наши проекты были доступны каждому, поэтому наши продукты бесплатны и ориентированы на широкий круг пользователей.
        </p>

        <div className="projects">
          <Link to="/amethyst" className="project">
            <div className="project-content">
              <img src="/amethyst.png" alt="Amethyst" className="project-icon" />
              <div className="project-info">
                <h2>Amethyst</h2>
                <p>Minecraft сервер</p>
              </div>
            </div>
          </Link>
          <Link to="/launcher" className="project">
            <div className="project-content">
              <img src="/launcher-icon.png" alt="Launcher" className="project-icon" />
              <div className="project-info">
                <h2>RassvetLauncher</h2>
                <p>Лаунчер для Minecraft</p>
              </div>
            </div>
          </Link>
          <div className="project disabled">
            <div className="project-content">
              <div className="project-icon placeholder"></div>
              <div className="project-info">
                <h2>Скоро</h2>
                <p>Новый проект</p>
              </div>
            </div>
          </div>
        </div>

        <a href="https://t.me/rassvetteamdev" target="_blank" rel="noopener noreferrer" className="telegram-button">
          <i className="fab fa-telegram-plane"></i>
          <span>Присоединиться к Telegram</span>
        </a>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RassvetTeam</h4>
            <p>Команда разработчиков<br />уникальных проектов</p>
          </div>
          
          <div className="footer-section">
            <h4>Проекты</h4>
            <a href="#">Amethyst</a>
            <a href="#" className="disabled">Скоро</a>
            <a href="#" className="disabled">Скоро</a>
          </div>
          
          <div className="footer-section">
            <h4>Сообщество</h4>
            <a href="https://t.me/rassvetteamdev" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://donatty.com/rassvetteam" target="_blank" rel="noopener noreferrer">Пожертвовать</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 RassvetTeam. Все права защищены
        </div>
      </footer>
    </div>
  );
}

export default Home; 