import React from 'react';
import '../styles/Amethyst.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Profile = () => {
  return (
    <div className="amethyst">
      <Navbar />
      <PageTransition>
        <main className="profile-section">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="/da1loksavatar.png" alt="Avatar" />
              </div>
              <div className="profile-info">
                <h1>dalloks</h1>
                <div className="profile-status">
                  <span className="status-badge admin">Администратор</span>
                  <span className="status-badge online">Онлайн</span>
                </div>
              </div>
            </div>

            <div className="profile-content">
              <div className="profile-stats">
                <div className="stat-card">
                  <i className="fas fa-clock"></i>
                  <div className="stat-info">
                    <span className="stat-value">124ч</span>
                    <span className="stat-label">Наиграно</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-calendar"></i>
                  <div className="stat-info">
                    <span className="stat-value">15.03.24</span>
                    <span className="stat-label">Дата регистрации</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-star"></i>
                  <div className="stat-info">
                    <span className="stat-value">42</span>
                    <span className="stat-label">Достижения</span>
                  </div>
                </div>
              </div>

              <div className="profile-sections">
                <div className="profile-section-card">
                  <h2>
                    <i className="fas fa-cog"></i>
                    Настройки
                  </h2>
                  <div className="settings-list">
                    <button className="settings-btn">
                      <i className="fas fa-user"></i>
                      Изменить профиль
                    </button>
                    <button className="settings-btn">
                      <i className="fas fa-palette"></i>
                      Изменить внешний вид
                    </button>
                    <button className="settings-btn">
                      <i className="fas fa-shield-alt"></i>
                      Безопасность
                    </button>
                  </div>
                </div>

                <div className="profile-section-card">
                  <h2>
                    <i className="fas fa-trophy"></i>
                    Последние достижения
                  </h2>
                  <div className="achievements-list">
                    <div className="achievement-item">
                      <i className="fas fa-award"></i>
                      <div className="achievement-info">
                        <h3>Первые шаги</h3>
                        <p>Зайти на сервер впервые</p>
                      </div>
                    </div>
                    <div className="achievement-item">
                      <i className="fas fa-gem"></i>
                      <div className="achievement-info">
                        <h3>Добытчик</h3>
                        <p>Найти первый алмаз</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Profile; 