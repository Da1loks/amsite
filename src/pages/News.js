import React from 'react';
import '../styles/Amethyst.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const News = () => {
  return (
    <div className="amethyst">
      <Navbar />
      <PageTransition>
        <main className="news-section">
          <div className="news-container">
            <div className="news-header">
              <h1>Новости</h1>
            </div>

            <div className="news-grid">
              <div className="news-item">
                <div className="news-date">15 Марта 2024</div>
                <h2>Открытие сервера</h2>
                <p>Мы рады сообщить об официальном открытии нашего сервера!</p>
                <div className="news-footer">
                  <span className="news-author">
                    <i className="fas fa-user"></i> Администрация
                  </span>
                  <a href="#" className="news-read-more">Читать далее</a>
                </div>
              </div>

              <div className="news-item">
                <div className="news-date">14 Марта 2024</div>
                <h2>Обновление правил</h2>
                <p>Были обновлены правила сервера. Пожалуйста, ознакомьтесь с изменениями.</p>
                <div className="news-footer">
                  <span className="news-author">
                    <i className="fas fa-user"></i> Администрация
                  </span>
                  <a href="#" className="news-read-more">Читать далее</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default News;
