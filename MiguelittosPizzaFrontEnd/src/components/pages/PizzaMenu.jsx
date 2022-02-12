import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import apiUrl from '../../config/api'
import reducer from '../../utils/reducer'

import Context from '../context/context';
import './PizzaMenu.css';
import Title from '../Header/Header';

function PizzaMenu () {

  const { cart, setCart } = useContext(Context);
  
  const [menuItems, setMenuItems] = useState([])
  
  //cart functions
  const addToCart = (menuItem) => {
    setCart([...cart,menuItem]);//pushes the given pizza to the cart array as a new object, not a duplicate
  }

  //remove one item from cart function
  const removeFromCart =(menuItemToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
    setCart(
      cart.filter((menuItem) => menuItem !== menuItemToRemove)
    );
  };

  const clearCart = () => {
    setCart([]);
  }

  const getCartTotalSum = () => {
    return cart.reduce(
      (sum, {price}) => sum + price, 0
    )
  }

  let navigate = useNavigate();
  
  function goToDIYPizzas(){
    navigate('/DIYPizza')
     
  }

  function goToCheckout(){
    navigate('/PlaceOrder')
  }


  useEffect(async () => {
      try{
        const {status, data} = await apiUrl.get("/api/pizzas/index") 
        console.log (status)
        setMenuItems(data)
      }
      catch(error){
          console.error(error + " in menu fetch")
      }
  }, [])


  const pizzaMenu = menuItems.map((menuItem,menuIndex) => {
     return (//the correct way to do style is below
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
  <Title />
  <div id='PizzaMenuHeading'>
    <h2>Miguelitto's Classic Pizzas</h2>
  </div>

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
      <div>Total: ${getCartTotalSum()}</div>
      <button onClick={goToCheckout}>Check Out</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  </div>
  </>)
}

export default PizzaMenu