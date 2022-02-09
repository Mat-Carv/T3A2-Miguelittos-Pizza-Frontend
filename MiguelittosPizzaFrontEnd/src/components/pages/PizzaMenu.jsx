import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import './PizzaMenu.css';

const PizzaMenu = () => {

  const pizzaMenuUrl = "https://pizzaria-miguel.herokuapp.com/api/pizzas/index";
  const [cart, setCart] = useState([]);//created an empty shopping cart

  const [menuItems, setMenuItems] = useState([])

  const addToCart = (menuItem) => {
    console.log(menuItem.name + " added to cart");
    setCart([...cart,{...menuItem}]);//pushes the given pizza to the cart array as a new object, not a duplicate

    return (
      <>
      <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
      </div>
      </>
    )
  }

  const removeFromCart =(menuItemToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
    setCart(
      cart.filter((menuItem) => menuItem !== menuItemToRemove)
    );
  };


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
      <div className='cardcustomhandler' id='cardHandler' onClick={()=>addToCart(menuItem)}>
        <div className="card" style={{width: 18 +'em'}} key={menuIndex}>
          <img src="[placeholder]" className='card-img' alt='pizzaimageshouldbehere'></img>
          <div className="card-img-overlay">
            <h4 className="card-title">{menuItem.name}  {menuItem.price}</h4>
            <p className="card-text">{menuItem.description}</p>
            
         </div>
        <p></p>
      </div>
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

  <div id='ShoppingCart'>
  <h1>Shopping Cart</h1>
    <p></p>
    <div className='cart'>
      {
        cart.map((menuItem, index) => (
        <>
          <div className='ItemsInCart' key={index}>
            <h3>{menuItem.name}</h3>
            <h4>{menuItem.price}</h4>
            <p></p>
          </div>
          <button onClick={() => removeFromCart(menuItem)}>Remove?</button>
        </>
        ))
      }
      <p>
      </p>
      <button>Check Out</button>
    </div>
  </div>
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
