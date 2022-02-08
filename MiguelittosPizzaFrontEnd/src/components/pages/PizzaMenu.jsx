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
     return (
       //the correct way to do style is below
         <>
         <div className="card" style={{ width: 18 + 'em' }}>
         <img src="[placeholder]" className='card-img' alt='pizzaimage'></img>
         <div className="card-img-overlay">
           <h4 className="card-title">{menuItem.name}</h4>
           <p className="card-text">{menuItem.description}</p>
         </div>
          </>
         )
         }
)
         return(
         <>
           <div>{pizzaMenu}</div>
           <p></p><p></p>
          </>
            )
         }
}
         export default PizzaMenu
