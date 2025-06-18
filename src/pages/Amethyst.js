import React, { useState, useEffect, useRef } from 'react';
import '../styles/Amethyst.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { useNavigate } from 'react-router-dom';

const Amethyst = () => {
  const serverIP = "rassvetamethyst.ru:20002";
  const [playerHeads, setPlayerHeads] = useState([]);
  const [isHeadsLoading, setIsHeadsLoading] = useState(true);
  const headTrackRef = useRef(null);
  const screenshotsTrackRef = useRef(null);
  const animationFrameId = useRef(null);
  const screenshotsAnimationFrameId = useRef(null);
  const navigate = useNavigate();
  const serverScreenshots = [
    { id: 1, url: '/images/screenshots/screenshot1.png' },
    { id: 2, url: '/images/screenshots/screenshot2.png' },
    { id: 3, url: '/images/screenshots/screenshot3.png' },
    { id: 4, url: '/images/screenshots/screenshot4.jpg' },
    { id: 5, url: '/images/screenshots/screenshot5.jpg' },
    { id: 6, url: '/images/screenshots/screenshot6.jpg' }
  ];

  useEffect(() => {
    fetch('/data/player-heads.json')
      .then(response => response.json())
      .then(data => {
        setPlayerHeads(data.heads);
        setIsHeadsLoading(false);
        preloadHeadImages(data.heads);
      })
      .catch(error => {
        console.error('Ошибка загрузки голов персонажей:', error);
        setIsHeadsLoading(false);
      });
  }, []);

  
  const preloadHeadImages = (heads) => {
    heads.forEach(head => {
      const img = new Image();
      img.src = head.url;
    });

    
    serverScreenshots.forEach(screenshot => {
      const img = new Image();
      img.src = screenshot.url;
    });
  };

  
  useEffect(() => {
    if (headTrackRef.current && playerHeads.length > 0) {
      
      const headGroup = headTrackRef.current.querySelector('.head-group');
      if (headGroup) {
        headTrackRef.current.style.animation = 'none';
        
        const groupWidth = headGroup.offsetWidth;
        document.documentElement.style.setProperty('--head-group-width', `${groupWidth}px`);
        let speedMultiplier = 1;
        try {
          const rawSpeed = getComputedStyle(document.documentElement).getPropertyValue('--carousel-speed');
          const speedInSeconds = parseFloat(rawSpeed);
          if (!isNaN(speedInSeconds) && speedInSeconds > 0) {
            speedMultiplier = 10 / speedInSeconds;
          }
        } catch (e) {
          console.error('Ошибка при чтении скорости карусели:', e);
        }
        
        let progress = 0;
        let lastTime = 0;
        const smoothAnimate = (timestamp) => {
          if (!lastTime) lastTime = timestamp;
          const deltaTime = timestamp - lastTime;
          lastTime = timestamp;
          progress += deltaTime * 0.00005 * speedMultiplier;
          const currentProgress = progress % 1;
          const translateX = -(currentProgress * groupWidth);
          
          if (headTrackRef.current) {
            headTrackRef.current.style.transform = `translateX(${translateX}px)`;
          }
          
          animationFrameId.current = requestAnimationFrame(smoothAnimate);
        };
        animationFrameId.current = requestAnimationFrame(smoothAnimate);
        
        return () => {
          if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
          }
        };
      }
    }
  }, [playerHeads, isHeadsLoading]);
  useEffect(() => {
    if (screenshotsTrackRef.current && serverScreenshots.length > 0) {
      const screenshotsGroup = screenshotsTrackRef.current.querySelector('.screenshots-group');
      if (screenshotsGroup) {
        screenshotsTrackRef.current.style.animation = 'none';
        
        const groupWidth = screenshotsGroup.offsetWidth;
        
        let progress = 0;
        let lastTime = 0;
        const speedMultiplier = 0.6;
        
        const smoothAnimateScreenshots = (timestamp) => {
          if (!lastTime) lastTime = timestamp;
          const deltaTime = timestamp - lastTime;
          lastTime = timestamp;
          
          progress += deltaTime * 0.00001 * speedMultiplier;
          const currentProgress = progress % 1;
          
          const translateX = -(currentProgress * groupWidth);
          
          if (screenshotsTrackRef.current) {
            screenshotsTrackRef.current.style.transform = `translateX(${translateX}px)`;
          }
          
          screenshotsAnimationFrameId.current = requestAnimationFrame(smoothAnimateScreenshots);
        };
        
        screenshotsAnimationFrameId.current = requestAnimationFrame(smoothAnimateScreenshots);
        
        return () => {
          if (screenshotsAnimationFrameId.current) {
            cancelAnimationFrame(screenshotsAnimationFrameId.current);
          }
        };
      }
    }
  }, [serverScreenshots]);
  useEffect(() => {
    const sponsorTrack = document.querySelector('.sponsor-track');
    if (sponsorTrack) {
      sponsorTrack.style.animation = 'none';
      const sponsorGroup = sponsorTrack.querySelector('.sponsor-group');
      if (sponsorGroup) {
        const groupWidth = sponsorGroup.offsetWidth;
        
        let progress = 0;
        let lastTime = 0;
        const speedMultiplier = 0.7;
        let animationFrameId = null;
        
        const smoothAnimateSponsors = (timestamp) => {
          if (!lastTime) lastTime = timestamp;
          const deltaTime = timestamp - lastTime;
          lastTime = timestamp;
          progress += deltaTime * 0.00002 * speedMultiplier;
          const currentProgress = progress % 1;
          const translateX = -(currentProgress * groupWidth);
          sponsorTrack.style.transform = `translateX(${translateX}px)`;
          
          animationFrameId = requestAnimationFrame(smoothAnimateSponsors);
        };
        animationFrameId = requestAnimationFrame(smoothAnimateSponsors);
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        };
      }
    }
  }, []);
  const renderPlayerHeads = () => {
    if (isHeadsLoading) {
      return <div className="loading-heads">Загрузка...</div>;
    }
    return (
      <>
        
        <div className="head-group first-group">
          {playerHeads.map(head => (
            <div key={`head-1-${head.id}`} className="player-head">
              <img src={head.url} alt={head.name} title={head.name} loading="eager" />
            </div>
          ))}
        </div>
        
        
        <div className="head-group second-group">
          {playerHeads.map(head => (
            <div key={`head-2-${head.id}`} className="player-head">
              <img src={head.url} alt={head.name} title={head.name} loading="eager" />
            </div>
          ))}
        </div>
      </>
    );
  };
  const renderScreenshots = () => {
    return (
      <>
       
        <div className="screenshots-group first-group">
          {serverScreenshots.map(screenshot => (
            <div key={`screenshot-1-${screenshot.id}`} className="server-screenshot">
              <img src={screenshot.url} alt={`Скриншот ${screenshot.id}`} loading="eager" />
            </div>
          ))}
      
          {serverScreenshots.map(screenshot => (
            <div key={`screenshot-1r-${screenshot.id}`} className="server-screenshot">
              <img src={screenshot.url} alt={`Скриншот ${screenshot.id}`} loading="eager" />
            </div>
          ))}
        </div>
        
        
        <div className="screenshots-group second-group">
          {serverScreenshots.map(screenshot => (
            <div key={`screenshot-2-${screenshot.id}`} className="server-screenshot">
              <img src={screenshot.url} alt={`Скриншот ${screenshot.id}`} loading="eager" />
            </div>
          ))}
          
          {serverScreenshots.map(screenshot => (
            <div key={`screenshot-2r-${screenshot.id}`} className="server-screenshot">
              <img src={screenshot.url} alt={`Скриншот ${screenshot.id}`} loading="eager" />
            </div>
          ))}
        </div>
      </>
    );
  };

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="amethyst">
      <Navbar />
      <PageTransition>
        <main className="hero-section">
          <div className="hero-content">
            <div className="title-group">
              <h2 className="subtitle">Лучший</h2>
              <h1 className="main-title">Приватный сервер Minecraft</h1>
              <h2 className="subtitle bottom">Дружный</h2>
            </div>
            
            <p className="hero-description">
              Мы - дружная команда, старающаяся делать сервер лучше для вас каждый день, 
              мы не идеальны, но стремимся к этому.
            </p>
            
            <div className="server-info">
              <div className="info-item">
                <i className="fas fa-cube"></i>
                <span>1.20.1</span>
              </div>
              <div className="info-item">
                <i className="fas fa-check-circle"></i>
                <span>Можно без лицензии</span>
              </div>
              <div className="info-item">
                <i className="fas fa-puzzle-piece"></i>
                <span>Forge</span>
              </div>
            </div>
            
            <div className="buttons-container">
              <button className="buy-access-btn">
                <i className="fas fa-shopping-cart"></i>
                Узнать больше о сервере
              </button>
              
              <button 
                className="copy-ip-btn" 
                onClick={() => navigator.clipboard.writeText('rassvetamethyst.ru:20002')}
                aria-label="Скопировать IP сервера"
              >
                <i className="fas fa-copy"></i>
                Скопировать IP
              </button>
              
              <div className="social-buttons">
                <button 
                  className="boosty-social-btn" 
                  onClick={() => handleSocialClick('https://boosty.to/rassvetamethyst')}
                  aria-label="Поддержать на Boosty"
                >
                  <svg className="boosty-icon" viewBox="0 0 235.6 292.2" fill="currentColor">
                    <path d="M44.3,164.5L76.9,51.6H127l-10.1,35c-0.1,0.2-0.2,0.4-0.3,0.6L90,179.6h24.8c-10.4,25.9-18.5,46.2-24.3,60.9 c-45.8-0.5-58.6-33.3-47.4-72.1 M90.7,240.6l60.4-86.9h-25.6l22.3-55.7c38.2,4,56.2,34.1,45.6,70.5 c-11.3,39.1-57.1,72.1-101.7,72.1C91.3,240.6,91,240.6,90.7,240.6z"/>
                  </svg>
                  <span>Boosty</span>
                </button>
                
                <button 
                  className="telegram-social-btn"
                  onClick={() => handleSocialClick('https://t.me/rassvetamethyst')}
                  aria-label="Присоединиться к Telegram"
                >
                  <i className="fab fa-telegram"></i>
                  <span>Telegram</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <section className="screenshots-section">
          <div className="server-screenshots-row">
            <div className="screenshots-track" ref={screenshotsTrackRef}>
              {renderScreenshots()}
            </div>
          </div>
        </section>

       <section className="features-section"> 
          <div className="feature-block">
            <h1 className="feature-main-title">Пять месяцев с нами</h1>
            <div className="feature-header">
              <i className="fas fa-heart"></i>
              <span>Мы ценим всех наших игроков</span>
            </div>
            
            <p className="feature-description">
              Прошло целых два сезона нашего сервера, было много как и хорошего, так и плохого. 
              Но мы учли все наши прошлые ошибки что бы быть лучше для вас на нашем новом 
              сезоне! Спасибо всем игрокам Amethyst, без них это было бы невозможно.
            </p>
          </div>
        </section>
        
        <section className="features-section lore-section"> 
          <div className="lore-container">
            <div className="lore-images">
              <img src="/images/lore/lore1.png" alt="Лор-событие 1" className="lore-img" />
              <img src="/images/lore/lore2.png" alt="Лор-событие 2" className="lore-img" />
              <img src="/images/lore/lore3.png" alt="Лор-событие 3" className="lore-img wide" />
            </div>
            
            <div className="lore-content">
              <h1 className="feature-main-title">Лор-события и ивенты</h1>
              <div className="feature-header">
                <i className="fas fa-rocket"></i>
                <span>Реализуйте свой потенциал</span>
              </div>
              
              <p className="feature-description">
                На нашем сервере проходят глобальные лоры, сценаристы и лор-администраторы 
                стараются сделать все для того, что бы лор был интересным! И конечно же не стоит 
                забывать про обычных игроков! Помимо лоров мы проводим множество ивентов и посиделок.
              </p>
              
              <button className="events-btn" onClick={() => { navigate('/events'); document.activeElement.blur(); }}>
                <i className="far fa-star"></i>
                Перейти к событиям
              </button>
            </div>
          </div>
        </section>
        
        <section className="community-section">
          <div className="community-container">
            <h2 className="community-title">Комьюнити</h2>
            <div className="community-subtitle">
              <i className="fas fa-eye"></i>
              <span>Фокус на сообществе</span>
            </div>
            <p className="community-description">
              Мы стремимся как можно лучше фильтровать и поддерживать наше сообщество! Для того, что бы оно 
              оставалось таковым, мы требуем от вас анкеты. Это не сложно, но вы помогаете поддерживать наше сообщество таким образом
            </p>
            
            <div className="player-heads-row">
              <div className="heads-track" ref={headTrackRef}>
                {renderPlayerHeads()}
              </div>
            </div>
          </div>
        </section>
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Amethyst</h3>
              <p className="footer-description">
                Приватный сервер Minecraft с уникальными модами и дружным комьюнити
              </p>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Ссылки</h4>
              <ul className="footer-links">
                <li><a href="/rules" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Правила</a></li>
                <li><a href="/mods" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Моды</a></li>
                <li><a href="https://boosty.to/rassvetamethyst/donate" target="_blank" rel="noopener noreferrer">Донат</a></li>
                <li><a href="/wiki" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/under-construction';
                }}>Вики</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-subtitle">Соц. сети</h4>
              <div className="footer-socials">
                <button onClick={() => handleSocialClick('https://boosty.to/rassvetamethyst')} className="social-btn boosty-btn">
                  <svg className="boosty-icon" viewBox="0 0 235.6 292.2" fill="currentColor">
                    <path d="M44.3,164.5L76.9,51.6H127l-10.1,35c-0.1,0.2-0.2,0.4-0.3,0.6L90,179.6h24.8c-10.4,25.9-18.5,46.2-24.3,60.9 c-45.8-0.5-58.6-33.3-47.4-72.1 M90.7,240.6l60.4-86.9h-25.6l22.3-55.7c38.2,4,56.2,34.1,45.6,70.5 c-11.3,39.1-57.1,72.1-101.7,72.1C91.3,240.6,91,240.6,90.7,240.6z"/>
                  </svg>
                </button>
                <button onClick={() => handleSocialClick('https://t.me/rassvetamethyst')} className="social-btn telegram-btn">
                  <i className="fab fa-telegram"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              <p>© 2024-2025 Amethyst</p>
              <p className="copyright-notice">
                Все материалы, включая изображения, тексты и дизайн, защищены авторским правом. 
                Копирование и использование без разрешения запрещено.
              </p>
            </div>
            <p className="server-ip">{serverIP}</p>
          </div>
        </footer>
        
      </PageTransition>
    </div>
  );
};

export default Amethyst;
