import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  fetch('https://pizzaria-miguel.herokuapp.com/api/products/index/1',{
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      //Authentication: token
    }
  })

  return (
    <div className="App">
      <h1>Hello world</h1>
      
    </div>
  )
}

export default App
