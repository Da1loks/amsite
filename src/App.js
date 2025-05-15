import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Amethyst from './pages/Amethyst';
import Auth from './pages/Auth';
import UnderConstruction from './pages/UnderConstruction';
import Forum from './pages/Forum';
import Rules from './pages/Rules';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Amethyst />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/news" element={<UnderConstruction />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const unboundedFont = document.createElement('link');
    unboundedFont.href = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700&display=swap';
    unboundedFont.rel = 'stylesheet';
    document.head.appendChild(unboundedFont);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
