import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/context';
import apiUrl from '../../config/api';
import { useNavigate } from 'react-router';
import Title from '../Header/Header';
import pizzaPhoto from '../images/pizzaPhoto.jpg'

const DIYPizza = () =>{

  const { cart, setCart } = useContext(Context);

  const [ingredientsTable, setIngredients] = useState([])//get ingredients from backend
  const [DIYCart, setDIYCart] = useState([])//creat a cart to build a pizza in
 
  const {context, setContext} = useContext(Context) //call for save files

  const placeholderPizzaIngredientImageURL = pizzaPhoto

  const navigate = useNavigate()
//fetch ingredients
  useEffect(async () => {
    console.log("menu ingredients fetched")
      try{
        const {status, data} = await apiUrl.get('/api/products/index/1') 
        console.log (status)
        setIngredients(data[0])//this removes the stupid pizza from the import and makes the rest of my life so much easier
      }
      catch(error){
          console.error(error)
      }
  }, [])
  
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
    let totalPizzaPrice = getCartTotalSum()
    
   // return 
    let customPizza = {
        name: "Custom",
        price: totalPizzaPrice,
        base: customPizzabase[0].name,
        sauce: customPizzaSauce[0].name,
        toppings: pizzaToppings
    }
 //push to newCart  
    setCart([...cart,customPizza]);
    navigate('/PizzaMenu')
  }
  
  //returns the ingredients fetched prior
  const DIYPizzaConstructor = ingredientsTable.map((ingredient, index) => {//so the issue here is that the products index has the custom pizza template in it. the question mark makes it possible to ignore it
    //the Pizza that should never have been in the table has now been removed from the import
            if (ingredient.category === "Toppings") {
                return(
                    <>
                    <div className className='col'>
                        <div className="card bg-dark text-white" style={{width: 18 +'em'}} key={index}  onClick={()=>addToppingToCart(ingredient)}>
                        <img src={placeholderPizzaIngredientImageURL} className='card-img' alt='ingredientimageshouldbehere'></img>
                            <div className="card-body">
                              <h4 className="card-title">Topping: {ingredient.name}  ${ingredient.price}</h4>
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
                <div className='col'>
                    <div className="card text-dark bg-warning" style={{width: 18 +'em'}} key={index} onClick={()=>addIngredientToCart(ingredient)}>
                    <img src={placeholderPizzaIngredientImageURL} className='card-img' alt='ingredientimageshouldbehere'></img>
                        <div className="card-body">
                          <h4 className="card-title">Sauce: {ingredient.name}  ${ingredient.price}</h4>
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
                <div className='col'>
                    <div className="card text-dark bg-danger" style={{width: 18 +'em'}} key={index} onClick={()=>addIngredientToCart(ingredient)}>
                    <img src={placeholderPizzaIngredientImageURL} className='card-img' alt='ingredientimageshouldbehere'></img>
                        <div className="card-body">
                          <h4 className="card-title"> Base: {ingredient.name}  ${ingredient.price}</h4>
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

    <div className='text-justify'>
      <h2 className='text-center'>Choose Your Base, Sauce and Toppings</h2>
    </div>

    <div id="ingredientsConstructor" className='card-group'>{DIYPizzaConstructor}</div>

    <div id='DIYPizzaCart' className='card-group'>
        
        {
        DIYCart.map((ingredient, index) => (
          <>
            <div id='ItemsInCart' key={index} className='card-md-8'>
              <h3>{ingredient.name} x {ingredient.quantity}</h3>
              <h4>${ingredient.price}</h4>
              <p></p>
            </div>
            <button onClick={() => removeFromCart(ingredient)} className='btn btn-danger'>Remove?</button>
          </>
          ))
        }
    
    </div>
    <div id='TotalSum' className='card-md-8 fs-1'>
      <div>Total: ${getCartTotalSum().toFixed(2)}</div>
    </div>
    <div id='button group' className='card-group'>
      <div id='addCustomPizzaToCart' className='card'>
        <button onClick={addCustomPizzaToCart} className='btn btn-primary btn-lg'>Confirm Pizza </button>
      </div>
      <div id="clearCart" className='card'>
        <button type="button" className="btn btn-danger btn-lg" onClick={clearCart}>Clear Pizza</button>
      </div>
    </div>
  </>
  )
 
}

export default DIYPizza;
