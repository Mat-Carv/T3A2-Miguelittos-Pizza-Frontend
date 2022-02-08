import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const PizzaMenu = () => {

  const pizzaMenuUrl = "https://pizzaria-miguel.herokuapp.com/api/pizzas/index";
  // const ingredientsUrl = "https://pizzaria-miguel.herokuapp.com/api/products/index/1";

  const [menuItems, setMenuItems] = useState([])
  // const [ingredients, setIngredients] = useState([])

  // useEffect(async () => {
  //   console.log ("ingredients fetched")
  //   try{
  //     const {status, data} = await axios.get(ingredientsUrl)
  //     console.log (status,data)
  //     setIngredients(data)
  //   }

  //   catch(error){
  //     console.error(error + " in ingredients fetch")
  //   }

  // }, [])

  useEffect(async () => {
    console.log("menu fetched")
      try{
        const {status, data} = await axios.get(pizzaMenuUrl) 
        console.log (status, data)
        setMenuItems(data)
      }
      catch(error){
          console.error(error + " in menu fetch")
      }
  }, [])


  const pizzaMenu = menuItems.map((menuItem,menuIndex) => {
     return (//the correct way to do style is below
     <>
        <div className="card" style={{width: 18 +'em'}}>
          <img src="[placeholder]" className='card-img' alt='pizzaimageshouldbehere'></img>
          <div className="card-img-overlay">
            <h4 className="card-title">{menuItem.name}</h4>
            <p className="card-text">{menuItem.description}</p>
            {/* <h4>{menuItem.base}</h4>
            <h4>{menuItem.sauce}</h4>
            <h4>{menuIndex}</h4>  these are all things you can call. not price though*/}
         </div>
        <p></p>

      </div>
            <p></p>
      <p></p>
     </>
     )
  })

  return (
  <>
  <div>{pizzaMenu}</div>
  <p></p><p></p>
 
  </>)
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
