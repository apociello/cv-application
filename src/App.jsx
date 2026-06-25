import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import sunIcon from './assets/images/sun.svg';
import moonIcon from './assets/images/moon.svg';
import CvPage from './pages/CvPage.jsx';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const icon = darkMode ? moonIcon : sunIcon;

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.className = darkMode ? 'light' : 'dark';
  }

  return (
    <>
      <header>
        <p>CVStudio</p>

        <button
          onClick={() => toggleDarkMode()}
          aria-label={darkMode ? 'Activate light mode' : 'Activate dark mode'}
        >
          <img src={icon} width="21" alt="" />
        </button>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CvPage />} />
      </Routes>
    </>
  );
}

export default App;
