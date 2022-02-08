import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const PizzaMenu = () => {

  const [menuItems, setMenuItems] = useState([])

  useEffect(async () => {
    console.log("menu fetched")
      try{
        const {status, data} = await axios.get("https://pizzaria-miguel.herokuapp.com/api/pizzas/index") 
        console.log (status, data)
        setMenuItems(data)
      }
      catch(error){
          console.error(error)
      }
  }, [])

  const pizzaMenu = menuItems.map((menuItem,index) => {
     return (
     <>
        <div key ={index}>
        <h3>{menuItem.name}</h3>
        <h3>{menuItem.base}</h3>
        <h3>{menuItem.sauce}</h3>
        <p></p>

      </div>

     {/* <li key={menuItem.name}>{menuItem.name}</li> */}
     </>
     )
  })

  return <div>{pizzaMenu}</div>
}

export default PizzaMenu






// export class PizzaMenu extends Component {

//   render() {
//     // const [pizzas, setPizzas] = useState([])
//     // const [isLoading, setIsLoading] = useState(false)

//     // const fetchPizzas = () => {
//     //   setIsLoading(true)

//     //   fetch('https://pizzaria-miguel.herokuapp.com/api/pizzas/index')
//     //     .then(response => {
//     //       return response.json()
//     //     })
//     //     .then (data => {
//     //       setIsLoading(false)
//     //       setPizzas(data)
//     //     })
//     // }


//     // useEffect(()=> {
//     //   fetchPizzas()
//     // }, ['https://pizzaria-miguel.herokuapp.com/api/pizzas/index'])

//   let pizzaFetch = fetch('https://pizzaria-miguel.herokuapp.com/api/pizzas/index')
//   .then((response) => response.json())
//   .then((response) => {JSON.parse(response)})
//   .then((data) => {console.log(data)})

//   .catch((error) => (console.log ("error: "+ error)))

//       return(
//         <div>
//           {}//no error

//         </div>
//            )

//   }
// }

// export default PizzaMenu;
