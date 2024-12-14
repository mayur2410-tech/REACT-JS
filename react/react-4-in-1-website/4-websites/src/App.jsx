import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Meals from './components/Meals.jsx'
import Cocktail from './components/Cocktail.jsx'
import Potter from './components/Potter.jsx'
import Bank from './components/Bank.jsx'
import Home from './components/Home.jsx';
function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/meal" element={<Meals />} />
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/potter" element={<Potter />} />
        <Route path="/bank" element={<Bank />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
