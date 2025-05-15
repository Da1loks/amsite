import React, { useEffect } from 'react';
import '../styles/Launcher.css';

function Launcher() {
  useEffect(() => {
    document.title = 'RassvetLauncher';
  }, []);

  return (
    <div className="launcher-page">
      <div className="background-effects">
        <div className="gradient-sphere gradient-1"></div>
        <div className="gradient-sphere gradient-2"></div>
        <div className="gradient-sphere gradient-3"></div>
      </div>

      <div className="launcher-header">
        <a href="/" className="launcher-logo">
          <span className="logo-text">RassvetLauncher</span>
        </a>
        
        <nav className="nav-links">
          <a href="#features" className="nav-link">Особенности</a>
          <a href="#download" className="nav-link">Скачать</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Новая версия 1.0.0</div>
          <h1 className="hero-title">
            Удобный лаунчер<br />
            для Minecraft
          </h1>
          <p className="hero-description">
            Быстрый запуск игры, автоматическая установка модов и оптимизация производительности. Разработан специально для серверов RassvetTeam.
          </p>
          <div className="download-group">
            <button className="download-button">
              <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15L8 11H11V3H13V11H16L12 15Z" fill="currentColor"/>
                <path d="M20 16H4V18H20V16Z" fill="currentColor"/>
              </svg>
              Скачать для Windows
            </button>
            <div className="download-info">
              <span className="version-info">Версия 1.0.0</span>
              <span className="size-info">• 24.5 MB</span>
            </div>
          </div>
        </div>
        <div className="hero-preview">
          <div className="preview-mockup">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mockup-title">RassvetLauncher</div>
            </div>
            <div className="mockup-content">
              <div className="launcher-ui">
                <div className="launcher-sidebar">
                  <div className="sidebar-item active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <div className="sidebar-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                  </div>
                  <div className="sidebar-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="launcher-main">
                  <div className="main-header">
                    <div className="header-title">Главная</div>
                    <div className="header-actions">
                      <div className="action-button"></div>
                      <div className="action-button"></div>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="content-block server-card">
                      <div className="server-icon"></div>
                      <div className="server-info">
                        <div className="server-name">Amethyst</div>
                        <div className="server-status">Онлайн • 128 игроков</div>
                      </div>
                    </div>
                    <div className="content-block news-card">
                      <div className="news-header">Новости</div>
                      <div className="news-items">
                        <div className="news-item"></div>
                        <div className="news-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section" id="features">
        <div className="section-header">
          <h2>Особенности лаунчера</h2>
          <p className="section-description">Всё необходимое для комфортной игры</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" fill="#6366F1"/>
              </svg>
            </div>
            <h3>Быстрый запуск</h3>
            <p>Оптимизированный процесс загрузки и запуска игры</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#6366F1"/>
              </svg>
            </div>
            <h3>Авто-обновление</h3>
            <p>Автоматическое обновление модов и игры</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L23.5 12L1.51 3Z" fill="#6366F1"/>
              </svg>
            </div>
            <h3>Оптимизация</h3>
            <p>Встроенные оптимизации для лучшей производительности</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#6366F1"/>
              </svg>
            </div>
            <h3>Безопасность</h3>
            <p>Проверенные моды и безопасное подключение</p>
          </div>
        </div>
      </div>

      <div className="requirements-section">
        <div className="section-header">
          <h2>Системные требования</h2>
          <p className="section-description">Минимальные требования для комфортной игры</p>
        </div>
        <div className="requirements-grid">
          <div className="requirement-card">
            <h3>Процессор</h3>
            <p>Intel Core i3 / AMD Ryzen 3 или лучше</p>
          </div>
          <div className="requirement-card">
            <h3>Видеокарта</h3>
            <p>NVIDIA GeForce GTX 750 Ti / AMD Radeon RX 550 или лучше</p>
          </div>
          <div className="requirement-card">
            <h3>Оперативная память</h3>
            <p>Минимум 8 GB RAM</p>
          </div>
          <div className="requirement-card">
            <h3>Место на диске</h3>
            <p>4 GB свободного места</p>
          </div>
        </div>
      </div>

      <div className="faq-section" id="faq">
        <div className="section-header">
          <h2>Часто задаваемые вопросы</h2>
          <p className="section-description">Ответы на популярные вопросы</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Как установить лаунчер?</h3>
            <p>Просто скачайте установщик и следуйте инструкциям. Всё остальное лаунчер сделает автоматически.</p>
          </div>
          <div className="faq-item">
            <h3>Какие версии Minecraft поддерживаются?</h3>
            <p>Лаунчер поддерживает все версии, необходимые для игры на наших серверах.</p>
          </div>
          <div className="faq-item">
            <h3>Как обновить лаунчер?</h3>
            <p>Лаунчер обновляется автоматически при запуске. Вам не нужно ничего делать дополнительно.</p>
          </div>
          <div className="faq-item">
            <h3>Нужен ли лицензионный аккаунт?</h3>
            <p>Да, для игры требуется лицензионный аккаунт Minecraft.</p>
          </div>
        </div>
      </div>

      <footer className="launcher-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RassvetLauncher</h4>
            <p>Официальный лаунчер<br />для серверов RassvetTeam</p>
          </div>
          <div className="footer-section">
            <h4>Ссылки</h4>
            <a href="https://t.me/rassvetteamdev">Telegram</a>
            <a href="https://donatty.com/rassvetteam">Поддержать проект</a>
          </div>
          <div className="footer-section">
            <h4>Поддержка</h4>
            <a href="#faq">FAQ</a>
            <a href="#download">Скачать</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 RassvetTeam. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}

export default Launcher; 