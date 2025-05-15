import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Более агрессивный подход к прокрутке
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // использовать 'instant' вместо плавной прокрутки
    });
    
    // Дополнительная проверка через таймаут
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 