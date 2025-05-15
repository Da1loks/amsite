import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Вход</h1>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Введите email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <div className="password-input">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              className="form-input"
            />
            <button 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
        </div>

        <button className="login-submit">
          Войти
        </button>

        <div className="register-link">
          <span>Нет аккаунта?</span>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 