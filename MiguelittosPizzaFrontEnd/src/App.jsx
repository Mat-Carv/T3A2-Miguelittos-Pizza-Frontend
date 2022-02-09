

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router'
import PizzaMenu from './components/pages/PizzaMenu'
import DIYPizza from './components/pages/DIYPizza'
import LandingPage from './components/pages/LandingPage'
import Admin from './components/pages/Admin.jsx'



function App() {
  
//TODO: Admin Routes

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/PizzaMenu" element={<PizzaMenu />} />
            <Route path="/DIYPizza" element={<DIYPizza />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
