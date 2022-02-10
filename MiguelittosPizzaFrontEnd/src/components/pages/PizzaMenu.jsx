import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './PizzaMenu.css';

const PizzaMenu = () => {

  const pizzaMenuUrl = "https://pizzaria-miguel.herokuapp.com/api/pizzas/index";
  const [cart, setCart] = useState([]);//created an empty shopping cart

  const [menuItems, setMenuItems] = useState([])

  const addToCart = (menuItem) => {
    console.log(menuItem.name + " added to cart");
    setCart([...cart,{...menuItem}]);//pushes the given pizza to the cart array as a new object, not a duplicate
  }

  const removeFromCart =(menuItemToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
    setCart(
      cart.filter((menuItem) => menuItem !== menuItemToRemove)
    );
  };

  let navigate = useNavigate();
  
    function goToDIYPizzas(){
      let cartToDIYPizzas = cart
      console.log(cartToDIYPizzas)
      localStorage.setitem(cartToDIYPizzas, JSON.stringify('cartToDIY',cartToDIYPizzas))
      navigate('/DIYPizza')
    }

    function goToMainMenu(){
      navigate('/')
    }

    function goToCheckout(){
      let cartFinalised = cart
      console.log(cartFinalised)
      localStorage.setItem(cartFinalised, JSON.stringify('cartToCheckout',cartFinalised))
      navigate('/PlaceOrder')
    }


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
     return (//the correct way to do style is below//so to avoid a very annoying if statement here, it might be better to remove the custom pizza from the pizzas database
     <>
      <div>
            <div className='cardcustomhandler' id='cardHandler' onClick={()=>addToCart(menuItem)}>
                <div className="card bg-dark text-white" style={{width: 18 +'em'}} key={menuIndex}>
                  <img src="https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg" className='card-img' alt='pizzaimageshouldbehere'></img>
                  <div className="card-img-overlay">
                    <h4 className="card-title">{menuItem.name}  ${menuItem.price}</h4>
                    <p className="card-text">{menuItem.description}</p>
                    <p></p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
            </div>
          <p></p>  
          <p></p>
          <p></p>
      </div>
     </>
     )
  })

  return (
  <>
  <div>{pizzaMenu}</div>
  <p></p>
  <p></p>

  <div id='customPizzaLink' onClick={goToDIYPizzas}>
        <div className="card bg-dark text-white" style={{width: 18 +'em'}}>
            <img src="https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg" className='card-img' alt='pizzaimageshouldbehere'></img>
            <div className="card-img-overlay">
              <h4 className="card-title">Custom Pizza</h4>
              <p className="card-text">Fancy something else? Try out our custom pizza designer to design your perfect pizza</p>
              <p></p>
              <p></p>
            </div>
          <p></p>
      </div>
  </div>

  <div id='ShoppingCart'>
  <h1>Shopping Cart</h1>
    <p></p>
    <div className='cart'>
      {//TODO: STYLE
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
      <button onClick={goToCheckout}>Check Out</button>
    </div>
  </div>
  </>)
}

export default PizzaMenu