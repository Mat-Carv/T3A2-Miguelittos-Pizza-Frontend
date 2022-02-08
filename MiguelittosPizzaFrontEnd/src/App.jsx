import { useState } from 'react'
import PizzaMenu from './components/pages/PizzaMenu'
import DIYPizza from './components/pages/DIYPizza'



function App() {
  const [count, setCount] = useState(0)
  // fetch('https://pizzaria-miguel.herokuapp.com/api/products/index/1',//so to make the fetch work it needs the exact source. we dont do this here though
  // {
  //   headers:{
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     //Authentication: token
  //   }
  // })

  // .then(res=>res.json())
  // .then(data=>this.setState({
  //   ingredients: data
  // })
  // )

  return (
    <div className="App">
      <DIYPizza />
    </div>
  )
}

export default App
