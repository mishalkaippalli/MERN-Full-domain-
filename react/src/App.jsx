import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'  // ✅
import About from './pages/about'
import TryEffect from './pages/useEffect'
import Trycallback from './pages/useCallback';
import TryuseMemo from './pages/useMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tryeff">useEffect</Link>
        <Link to="/tryusecallback">useCalback</Link>
        <Link to="/tryusememo">useMemo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/tryusecallback" element={<Trycallback />} />
        <Route path="/tryusememo" element={<TryuseMemo />} />
      </Routes>
    </>
  )
}

export default App
