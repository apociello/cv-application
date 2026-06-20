import { useState } from 'react';
import HomePage from './pages/HomePage';
import sunIcon from './assets/images/sun.svg';
import moonIcon from './assets/images/moon.svg';
import './App.css';
import CvPage from './pages/CvPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCvPage, setShowCvPage] = useState(false);

  const icon = darkMode ? moonIcon : sunIcon;

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.className = darkMode ? 'light' : 'dark';
  }

  return (
    <>
      <header>
        <p>CVStudio</p>

        <button onClick={() => toggleDarkMode()}>
          <img src={icon} width="21" alt="" />
        </button>
      </header>

      {showCvPage ? <CvPage /> : <HomePage goToCvPage={setShowCvPage}/> }
    </>
  );
}

export default App;
