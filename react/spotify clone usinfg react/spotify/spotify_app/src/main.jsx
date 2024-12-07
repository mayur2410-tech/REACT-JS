import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './components/spotify.css'
// import Mainmenu from './components/mainmenu.jsx'
import Slidebar from './components/slidebar.jsx'
import Mainmenu from './component1/Mainmenu.jsx'
import Playcontrol from './component1/Playcontrol.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="sepate">
    <Slidebar />
    <Mainmenu />
    </div>
    <Playcontrol />
  </StrictMode>,
)
