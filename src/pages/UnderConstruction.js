import React from 'react';
import { motion } from 'framer-motion';
import '../styles/UnderConstruction.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const UnderConstruction = () => {
  return (
    <div className="under-construction-page">
      <Navbar />
      <PageTransition>
        <div className="under-construction-container">
          <div className="content">
            <h1>Страница в разработке</h1>
            <p>Данный раздел находится в стадии разработки.<br />Следите за обновлениями!</p>
            
            <motion.div 
              className="rotating-circle"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.a 
              href="https://t.me/rassvetamethyst" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="telegram-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.504 1.201-.825 1.23-.703.064-1.237-.461-1.917-.903-1.065-.693-1.665-1.123-2.7-1.8-1.194-.776-.42-1.2.26-1.897.178-.18 3.278-3.006 3.337-3.264.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.48-.428-.009-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.098.153.228.166.336.032.272-.012.621-.012.621z"/>
              </svg>
              <span>Подписаться на обновления</span>
            </motion.a>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default UnderConstruction; 