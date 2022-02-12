

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import useLocalStorage from "use-local-storage"
import { useState } from "react"

import Context from './components/context/context.jsx'

import PizzaMenu from './components/pages/PizzaMenu'
import DIYPizza from './components/pages/DIYPizza' 
import AdminSignIn from './components/pages/AdminSignIn.jsx' 
import PlaceOrder from './components/pages/PlaceOrder'
import SignUpForm from './components/pages/SignUpForm'
import SignInForm from './components/pages/SignInForm'
import LandingPage from './components/pages/LandingPage.jsx' 
import PendingOrders from './components/pages/PendingOrders'


function App() {

  const [cart,setCart] = useState([]);
//TODO: Admin Routes

  return (
    <div className="App">
     
     <Context.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/PizzaMenu" element={<PizzaMenu />} />
            <Route path="/DIYPizza" element={<DIYPizza />} />
            <Route path="/Admin" element={<AdminSignIn />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/SignIn" element={<SignInForm />} />
            <Route path ="/PendingOrders" element ={<PendingOrders />} />
           
          </Routes>
          
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
