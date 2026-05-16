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
import WithLoading from './pages/practice'
import FetchUsers from './pages/practice'
import Appforlogin from './pages/practice'
import AppTrial from './pages/practice'


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
        <Link to="/practice">Practice</Link>
        <Link to="/fetchusers">fetchusers</Link>
        <Link to="appforlogin">Login user</Link>
        <Link to="apptrial">App trial</Link>
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
        <Route path="/practice" element={<WithLoading isLoading={false} name="Mishal" />} />
        <Route path="fetchusers" element={<FetchUsers/>}></Route>
        <Route path="appforlogin" element={<Appforlogin/>}></Route>
        <Route path="apptrial" element={<Appforlogin/>}></Route>
      </Routes>
    </>
  )
}

export default App
