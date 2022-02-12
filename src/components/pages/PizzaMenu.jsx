import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import apiUrl from '../../config/api'
import reducer from '../../utils/reducer'

import Context from '../context/context';
import Title from '../Header/Header';
import pizzaPhoto from '../images/pizzaPhoto.jpg'

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
    ).toFixed(2)
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
      <div className='col-md-3'>
            <div className='cardcustomhandler' id='cardHandler' onClick={()=>addToCart(menuItem)}>
                <div className="card bg-dark text-white" style={{width: 18 +'em'}} key={menuIndex}>
                  <img src= {pizzaPhoto} className='card-img' alt='pizzaimageshouldbehere'></img>
                  <div className="card-img-top">
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
  <div className='container-fluid'>
    <div className='card-group'>{pizzaMenu}</div>
      <p></p>
      <p></p>
    <div className='col-md-3'>
    <div id='customPizzaLink' onClick={goToDIYPizzas}>
          <div className="card bg-dark text-white" style={{width: 18 +'em'}}>
              <img src={pizzaPhoto} className='card-img' alt='pizzaimageshouldbehere'></img>
              <div className="card-img-top">
                <h4 className="card-title">Custom Pizza</h4>
                <p className="card-text">Fancy something else? Try out our custom pizza designer to design your perfect pizza</p>
                <p></p>
                <p></p>
              </div>
            <p></p>
        </div>
    </div>
    </div>
  </div>
  <div id='ShoppingCart' className='col w-auto p-3'>
  <h1>Shopping Cart</h1>
    <p></p>
    <div className='card-group'>
      {//TODO: STYLE
        cart.map((menuItem, index) => (
        <><div className='card'>
          <div id='ItemsInCart' key={index} className="card-body">
            <h3>{menuItem.name}</h3>
            <h4>{menuItem.price}</h4>
            <p></p>
          </div>
          <button onClick={() => removeFromCart(menuItem)} className="btn btn-danger">Remove?</button>
          </div>
        </>
        ))
      }
      <p>
      </p>
      <div className='card'>
        <div className='font-weight-bold fs-2'>Total: ${getCartTotalSum()}</div>
      </div>

      <button onClick={goToCheckout} className="btn btn-primary">Check Out</button>
      <button onClick={clearCart} className="btn btn-danger">Clear Cart</button>
    </div>
  </div>
  </>)
}

export default PizzaMenu