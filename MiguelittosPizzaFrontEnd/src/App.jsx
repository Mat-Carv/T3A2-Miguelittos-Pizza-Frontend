

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useLocalStorage from "use-local-storage"

import Context from './components/context/context.jsx'

import { useNavigate } from 'react-router'
  import PizzaMenu from './components/pages/PizzaMenu'
  import DIYPizza from './components/pages/DIYPizza'
  import LandingPage from './components/pages/landingpage'
  import Admin from './components/pages/Admin.jsx'
  import PlaceOrder from './components/pages/PlaceOrder'
  import SignUp from './components/pages/Signup'



function App() {

  const [context,setContext] = useLocalStorage("context", {});  
//TODO: Admin Routes

  return (
    <div className="App">
     <Context.Provider value={{context, setContext}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/PizzaMenu" element={<PizzaMenu />} />
            <Route path="/DIYPizza" element={<DIYPizza />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
            <Route path="/SignUp" element={<SignUp />} />

          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
