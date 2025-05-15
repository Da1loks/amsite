import React from 'react';
import '../styles/Account.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Account = () => {
  return (
    <div className="account">
      <Navbar />
      <PageTransition>
        <main className="account-container">
          <div className="account-content">
            <h1 className="account-title">Личный кабинет</h1>
            
            <div className="account-info">
              <div className="profile-section">
                <div className="avatar-container">
                  <img src="/default-avatar.png" alt="Аватар пользователя" className="user-avatar" />
                  <button className="change-avatar-btn">Изменить аватар</button>
                </div>
                
                <div className="user-details">
                  <h2 className="username">Имя пользователя</h2>
                  <p className="user-status">Статус: Игрок</p>
                  <p className="join-date">Дата регистрации: 01.01.2024</p>
                </div>
              </div>

              <div className="stats-section">
                <h3>Статистика</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Время в игре</span>
                    <span className="stat-value">0 часов</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Баланс</span>
                    <span className="stat-value">0 монет</span>
                  </div>
                </div>
              </div>

              <div className="settings-section">
                <h3>Настройки</h3>
                <button className="settings-btn">Изменить пароль</button>
                <button className="settings-btn">Настройки профиля</button>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Account; 