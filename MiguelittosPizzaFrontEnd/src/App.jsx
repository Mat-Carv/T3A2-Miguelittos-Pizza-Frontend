

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useLocalStorage from "use-local-storage"

import Context from './components/context/context.jsx'

import { useNavigate } from 'react-router'
  import PizzaMenu from './components/pages/PizzaMenu'
  import DIYPizza from './components/pages/DIYPizza'
  import Admin from './components/pages/Admin.jsx'
  import PlaceOrder from './components/pages/PlaceOrder'
  import SignUp from './components/pages/SignUp'
  import Title from './components/Header/Header.jsx'
import LandingPage from './components/pages/LandingPage.jsx'



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
      <Title />
    </div>
  )
}

export default App
