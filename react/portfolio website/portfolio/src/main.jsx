import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './componenet/Navbar/Navbar.jsx'
import {Home}  from './componenet/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Home />
  </StrictMode>,
)
