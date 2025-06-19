import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rules from './pages/Rules';
import Amethyst from './pages/Amethyst';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Router>
        <Routes>
          <Route path="/amethyst" element={<Amethyst />} />
          <Route path="/amethyst/rules" element={<Rules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App; 