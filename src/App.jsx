import { useState } from 'react'
import HomePage from "./pages/homePage"
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App