import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Context from '../context/context';
import apiUrl from '../../config/api';
import { useNavigate } from 'react-router';

import Title from '../Header/Header';

const DIYPizza = () =>{
  const [ingredientsTable, setIngredients] = useState([])//get ingredients from backend
  const [DIYCart, setDIYCart] = useState([])//creat a cart to build a pizza in
  const [newCart, setNewCart] = useState([])
  
  const {context, setContext} = useContext(Context) //call for save files

  const ingredientsURL = '/api/products/index/1'
  const placeholderPizzaIngredientImageURL = 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg'


  const navigate = useNavigate()
//fetch ingredients
  useEffect(async () => {
    console.log("menu ingredients fetched")
      try{
        const {status, data} = await apiUrl.get(ingredientsURL) 
        console.log (status, data)
        setIngredients(data[0])//this removes the stupid pizza from the import and makes the rest of my life so much easier
      }
      catch(error){
          console.error(error)
      }
  }, [])
  //note to self refactor shopping cart into its own class if time allows
  //calls the cart if you come from the classic menu page
  function getCartIfItExists(){
    let cartfromMiddata = context.cartToDIYPizzas;
    if(cartfromMiddata != null){
        setNewCart([])
    }else{
     let newCart = context.cartToDIYPizzas
    }
  }

  //adds an ingredient to the cart
  const addIngredientToCart = (ingredient) => {

    let newCart = [...DIYCart];
    let itemInCart = newCart.find((item) => ingredient.name === item.name);
    let itemInCartCategory = newCart.find((item) => ingredient.category === item.category);
      //if statement testing whether or not an item is there (and if it is a topping), if it is, increment the quantity
          if (itemInCart || itemInCartCategory) {//so this statement has to be incredibly annoying because you have to intialise the varialbes here
            if(itemInCartCategory == "Sauces" || "Bases"){
              return
            } 
             else {
              return
            }
          } 
          else{
            itemInCart = {//add the item as a new object with a quantity of one
              ...ingredient, quantity: 1,
            };
            newCart.push(itemInCart);
            console.log(newCart)
          } 

            setDIYCart(newCart);
          };

  const addToppingToCart = (ingredient) =>{
    let newCart = [...DIYCart];
    let itemInCart = newCart.find((item) => ingredient.name === item.name);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {//add the item as a new object with a quantity of one
        ...ingredient, quantity: 1,
      };
      newCart.push(itemInCart);
      //console.log(newCart)
    }
    setDIYCart(newCart);
  }

  const removeFromCart =(ingredientToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
    setDIYCart(
      DIYCart.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  const getCartTotalSum = () => {
    return DIYCart.reduce(
      (sum, {price, quantity}) => sum + price *quantity, 0
    )
   
  }
  const clearAllCarts = () => {
    setDIYCart([]);
    setNewCart([]);
  }
  const clearCart = () => {
    setDIYCart([]);
  }

  const addCustomPizzaToCart = () => {

    let customPizzaToppings = DIYCart.filter(obj => obj.category == "Toppings")
      let pizzaToppings = {}
      customPizzaToppings.forEach((topping) => {
        pizzaToppings[topping.name] = topping.quantity
      })


    let customPizzabase = DIYCart.filter( obj => obj.category =="Bases")
    let customPizzaSauce = DIYCart.filter( obj => obj.category =="Sauces")
    
    
   // return 
    let customPizza = {
        name: "Custom",
        base: customPizzabase[0].name,
        sauce: customPizzaSauce[0].name,
        toppings: pizzaToppings
    }
 //push to newCart  
    setNewCart([...newCart,{...customPizza}]);
   
   //console.log(localStorage.context.cartToDIYPizzas)
  }

  function goToCheckout(){
    let cartFinalised = newCart
    setContext({...context, cartFinalised})
    navigate('/PlaceOrder')
  }
  
  //returns the ingredients fetched prior
  const DIYPizzaConstructor = ingredientsTable.map((ingredient, index) => {//so the issue here is that the products index has the custom pizza template in it. the question mark makes it possible to ignore it
//the Pizza that should never have been in the table has now been removed from the import
            if (ingredient.category === "Toppings") {
                return(
                    <>
                    <div>
                        <div className="card" style={{width: 18 +'em'}} key={index}  onClick={()=>addToppingToCart(ingredient)}>
                        <img src={placeholderPizzaIngredientImageURL} className='card-img' alt='ingredientimageshouldbehere'></img>
                            <div className="card-body">
                            <h4 className="card-title">{ingredient.name}  ${ingredient.price}</h4>
                            <p></p>
                            <p></p>
                            </div>
                        <p></p>    
                        </div>
                        <p></p>
                        <p></p>
                    </div>
                    </>
                )
            } if (ingredient.category === "Sauces") {
                return(
                <>
                <div>
                    <div className="card" style={{width: 18 +'em'}} key={index} onClick={()=>addIngredientToCart(ingredient)}>
                    <img src="[placeholder]" className='card-img' alt='ingredientimageshouldbehere'></img>
                        <div className="card-body">
                        <h4 className="card-title">{ingredient.name}  ${ingredient.price}</h4>
                        <p></p>
                        <p></p>
                        </div>
                    <p></p>    
                    </div>
                    <p></p>
                    <p></p>
                </div>
                </>
                )
                
            } if(ingredient.category === "Bases"){
                return(
                <>
                <div>
                    <div className="card" style={{width: 18 +'em'}} key={index} onClick={()=>addIngredientToCart(ingredient)}>
                    <img src="[placeholder]" className='card-img' alt='ingredientimageshouldbehere'></img>
                        <div className="card-body">
                        <h4 className="card-title">{ingredient.name}  ${ingredient.price}</h4>
                        <p></p>
                        <p></p>
                        </div>
                    <p></p>    
                    </div>
                    <p></p>
                    <p></p>
                </div>
                </>
                )
            }
            
            else {
                return console.log("error, that shouldn't be there")
            }

  })

  return( 
  <>
    <Title />
    {getCartIfItExists}

    <div id="ingredientsConstructor">{DIYPizzaConstructor}</div>

    <div id='DIYPizzaCart'>
        {
        DIYCart.map((ingredient, index) => (
          <>
            <div className='ItemsInCart' key={index}>
              <h3>{ingredient.name} x {ingredient.quantity}</h3>
              <h4>${ingredient.price}</h4>
              <p></p>
            </div>
            <button onClick={() => removeFromCart(ingredient)}>Remove?</button>
          </>
          ))
        }
    </div>

    <div id='TotalSum'>
      <div>Total: ${getCartTotalSum()}</div>
    </div>

    <div id= 'addCustomPizzaTocart'>
        <button onClick={addCustomPizzaToCart}>
        Confirm Pizza
        </button>

    </div>
    
    <div id="clearCart">
      <button type="button" className="btn btn-danger" onClick={clearCart}>Clear Pizza</button>
    </div>

    <div id='clearEverything'>
      <button onClick={clearAllCarts}>Clear Everything</button>

    </div>

    <div id='submitOrder'>
        <button onClick={goToCheckout}>Submit Order</button>

    </div>
  </>
  )
 
}

export default DIYPizza;
