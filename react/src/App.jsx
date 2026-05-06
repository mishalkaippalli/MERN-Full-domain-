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
import Parent from './pages/ParentChild'
import Timer from './pages/Timer'
import ToggleExample from './pages/toggle'
import Parent1 from './pages/ChildParent'
import ToggleUsingUseContext from './pages/toggleUsingContext'

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
        <Link to="/parentchild">ParentChild</Link>
        <Link to="/timer">Timer10sec</Link>
        <Link to="/toggle">toggle</Link>
        <Link to="/toggleusingcontext">toggleusingusecontext</Link>
        <Link to="/parentchildform">formparentchild</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/tryusecallback" element={<Trycallback />} />
        <Route path="/tryusememo" element={<TryuseMemo />} />
        <Route path="/parentchild" element={<Parent />}/>
        <Route path="/timer" element={<Timer />}/>
        <Route path="/toggle" element={<ToggleExample/>}/>
        <Route path="/toggleusingcontext" element={<ToggleUsingUseContext />} />
        <Route path="/parentchildform" element={<Parent1 />} />
      </Routes>
    </>
  )
}

export default App
