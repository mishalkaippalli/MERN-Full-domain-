import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CheckboxProvider } from './pages/CheckboxContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
     <CheckboxProvider>
       <App />
     </CheckboxProvider>
    </BrowserRouter>
  // </StrictMode>,
)
