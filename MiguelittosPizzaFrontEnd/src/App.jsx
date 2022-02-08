import { useState } from 'react'
import PizzaMenu from './components/pages/PizzaMenu'
import DIYPizza from './components/pages/DIYPizza'



function App() {
  const [count, setCount] = useState(0)
  
//TODO: Routes

  return (
    <div className="App">
      <PizzaMenu />
    </div>
  )
}

export default App
