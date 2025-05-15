import React, { useEffect, useState } from 'react';
import '../styles/Rules.css';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Rules = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.title = 'Правила - Amethyst';
    
    // Обработчик изменения размера окна
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Добавляем favicon
    const favicons = [
      { rel: 'icon', href: '/amethyst.png', sizes: '32x32' },
      { rel: 'icon', href: '/amethyst-64.png', sizes: '64x64' },
      { rel: 'apple-touch-icon', href: '/amethyst-180.png', sizes: '180x180' }
    ];

    favicons.forEach(favicon => {
      let link = document.querySelector(`link[rel='${favicon.rel}'][sizes='${favicon.sizes}']`);
      if (!link) {
        link = document.createElement('link');
        link.rel = favicon.rel;
        link.href = favicon.href;
        link.sizes = favicon.sizes;
        document.head.appendChild(link);
      }
    });

    return () => {
      // Очистка при размонтировании
      window.removeEventListener('resize', handleResize);
      favicons.forEach(favicon => {
        const link = document.querySelector(`link[rel='${favicon.rel}'][sizes='${favicon.sizes}']`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="rules-page">
      <Navbar />
      <PageTransition>
        <div className="rules-container">
          <div className="rules-header">
            <h1>Правила сервера Amethyst</h1>
            <p className="rules-subtitle">Ознакомьтесь с правилами нашего сервера для комфортной игры всех участников</p>
          </div>

          <div className="rules-nav">
            <button 
              className={`nav-button ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <i className="fas fa-gavel"></i> {isMobile ? 'Основные правила' : 'Основные правила'}
            </button>
            <button 
              className={`nav-button ${activeTab === 'city' ? 'active' : ''}`}
              onClick={() => setActiveTab('city')}
            >
              <i className="fas fa-city"></i> {isMobile ? 'Города' : 'Суд и города'}
            </button>
            <button 
              className={`nav-button ${activeTab === 'player' ? 'active' : ''}`}
              onClick={() => setActiveTab('player')}
            >
              <i className="fas fa-user"></i> {isMobile ? 'Игроки' : 'Права игроков'}
            </button>
          </div>

          {activeTab === 'admin' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>1. Основные правила сервера</h2>
                <ul>
                  <li>
                    <strong>1.1.</strong> Aдминистратор, модератор или владелец вправе наказать игрока по своему усмотрению.
                  </li>
                  <li>
                    <strong>1.2.</strong> Модераторы и администраторы вправе выдать временный бан до выяснения обстоятельств нарушения правил сервера.
                  </li>
                  <li>
                    <strong>1.3.</strong> Администраторы и модераторы не в праве возвращать потерянные игроком вещи.
                  </li>
                  <li>
                    <strong>1.4.</strong> Все покупки и вложения на сервер делаются добровольно и не могут быть возвращены.
                  </li>
                  <li>
                    <strong>1.5.</strong> При нечестной блокировке аккаунта на сервере игрок может написать апелляцию модераторам или администраторам.
                  </li>
                  <li>
                    <strong>1.6.</strong> Запрещена реклама сторонних сервисов услуг и тп, без обговорения с администрацией.
                  </li>
                  <li>
                    <strong>1.7.</strong> Запрещено изображение и упоминание нацистских символов и идей.
                  </li>
                  <li>
                    <strong>1.8.</strong> Запрещено массовое распространение личного конфликта (при условии если это конфликт между игроками) в случае если конфликт решила администрация(бан 1 день).
                  </li>
                  <li>
                    <strong>1.9.</strong> Запрещено частичное или полное уничтожение чужих построек.
                  </li>
                  <li>
                    <strong>1.10.</strong> Запрещено вмешиваться в прогресс других игроков (кража чужих вещей, убийство, постройка на чужой территории или вмешиваться в их игру на сервере) без их согласия.
                  </li>
                  <li>
                    <strong>1.11.</strong> Запрещено оскорблять или презирать других игроков сервера.
                  </li>
                  <li>
                    <strong>1.12.</strong> Запрещено изображение или упоминание материалов имеющих возрастное ограничение 18+.
                  </li>
                  <li>
                    <strong>1.13.</strong> Администраторы и модераторы в праве изменения наказания (смягчение или усиление), по их усмотрению.
                  </li>
                  <li>
                    <strong>1.14.</strong> При подаче жалобы на другого игрока или на администрацию (в случае нарушений прав), игрок должен предоставить доказательства и подробно описать ситуацию владельцу сервера, после чего ждать ответа и решения.
                  </li>
                  <li>
                    <strong>1.15.</strong> При иной несправедливой ситуации игрок может обратиться в суд или написать администрации или модерации.
                  </li>
                  <li>
                    <strong>1.16.</strong> Модераторы и Администраторы доверенные лица которые могут решать проблемы по мере поступления.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'city' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>2. Суд и права города</h2>
                <ul>
                  <li>
                    <strong>2.1.</strong> Суд - событие устраивомае игроками сервера для решения конфликтов или для альтернативного наказания на котором при согласии обеих сторон выбирается судья (нейтральный игрок, который не относится к какой либо стороне конфликта) и вынесенное решение будет использовано как наказание вместо наказания в правилах или оправдание виновного(наказание не выдается), если после решения суда решение не будет выполнено игрок не выполнивший решение суда получит бан на протяжении текущего сезона.
                  </li>
                  <li>
                    <strong>2.2.</strong> Каждое поселение в котором проживает более 5 человек может получить официальный статус города (попросив у администрации зарегистрировать город), при этом у города должен быть определен мер (управляющее лицо которое в ответе за всех жителей города, решает внешние и внутренние проблемы).
                  </li>
                  <li>
                    <strong>2.3.</strong> Игроки которых нет в городе не имеют право строить на его территории, при этом мер города может установить права для нейтральных игроков.
                  </li>
                  <li>
                    <strong>2.4.</strong> Чтобы зарегистрироваться в уже существующем городе нужно разрешение мера этого города.
                  </li>
                  <li>
                    <strong>2.5.</strong> Список игроков города и его обновление должно сообщаться владельцу сервера (@da1loks).
                  </li>
                  <li>
                    <strong>2.6.</strong> Игрок не может иметь 2 и более гражданств (быть жителем нескольких городов одновременно). Но игрок может выйти из города и вступить в другой город.
                  </li>
                  <li>
                    <strong>2.7.</strong> В городе может быть несколько поселений в которых живут игроки. При этом они будут жить и будут зарегистрированы в одном городе.
                  </li>
                  <li>
                    <strong>2.8.</strong> Территорией города является место на котором стоят постройки города или его игроков, или если на эту территорию имеются планы и эту территорию никто не оспаривает (никто не претендует на неё кроме города).
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'player' && (
            <div className="rules-content">
              <div className="rules-section">
                <h2>3. Права игроков</h2>
                <ul>
                  <li>
                    <strong>3.1.</strong> Территорию игрока считается территория на которой стоят постройки игрока и 2 чанка от границ построек.
                  </li>
                  <li>
                    <strong>3.2.</strong> Если игрок является членом города, то его территория включается в территорию города.
                  </li>
                  <li>
                    <strong>3.3.</strong> Игрок при желании может работать на город, для получения гражданства не являясь его членом, при этом после определенного мэром города срока добровольной работы на город, игрок должен получить гражданство.
                  </li>
                  <li>
                    <strong>3.4.</strong> Игрок имеющий гражданство города и не являющийся мэром может иметь какую либо роль в городе и должен выполнять условия проживания в городе(устанавливаемые мэром).
                  </li>
                  <li>
                    <strong>3.5.</strong> Игрок имеет право строить магазины или иные постройки на свободной территории или территории города(при согласии мера).
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {showScrollTop && (
            <button 
              className="scroll-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Прокрутить наверх"
            >
              <i className="fas fa-chevron-up"></i>
            </button>
          )}
          
          <div className="rules-footer">
            <p>Правила могут изменяться и дополняться администрацией сервера без предварительного уведомления</p>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Rules; 