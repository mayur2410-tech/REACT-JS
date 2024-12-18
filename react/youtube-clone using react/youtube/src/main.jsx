import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/sidebar.jsx'
import Mainmenu from './components/mainmenu.jsx'
import {Yutube} from './components/yutube.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="flex">
    <Sidebar />
    <Mainmenu />
    </div>
    {/* <Yutube /> */}
  </StrictMode>,
)
