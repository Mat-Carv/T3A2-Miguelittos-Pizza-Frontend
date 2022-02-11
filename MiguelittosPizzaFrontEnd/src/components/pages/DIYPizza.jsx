import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Context from '../context/context';

import Title from '../Header/Header';

const DIYPizza = () =>{
  const [ingredientsTable, setIngredients] = useState([])//get ingredients from backend
  const [DIYCart, setDIYCart] = useState([])//creat a cart to build a pizza in
  
  
  const {context, setContext} = useContext(Context) //call for save files

  const ingredientsURL = 'https://pizzaria-miguel.herokuapp.com/api/products/index/1'
  const placeholderPizzaIngredientImageURL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.taste.com.au%2Fquick-easy%2Fgalleries%2Fwinter-pizzas-we-cant-get-enough%2Fhktjp30r&psig=AOvVaw0nMKA51NGjS1Eb61msvGFu&ust=1644536043625000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiZh9jk8_UCFQAAAAAdAAAAABAD'

//fetch ingredients
  useEffect(async () => {
    console.log("menu ingredients fetched")
      try{
        const {status, data} = await axios.get(ingredientsURL) 
        console.log (status, data)
        setIngredients(data)
      }
      catch(error){
          console.error(error)
      }
  }, [])
  //note to self refactor shopping cart into its own class if time allows
  //calls the cart if you come from the classic menu page
  function getPizzacartFromClassicMenu() 
  {
    let cartfromMiddata = context.cartToDIYPizzas;
      console.log(cartfromMiddata)
      return(cartfromMiddata)
  }
  //adds an ingredient to the cart
  const addIngredientToCart = (ingredient) => {
    console.log(ingredient.name + " added to cart");
    setDIYCart([...DIYCart,{...ingredient}]);//pushes the given ingredient to the cart array as a new object, not a duplicate. well that just makes it really easy to send multiples of an ingredient
  }

  const removeFromCart =(ingredientToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
    setDIYCart(
      DIYCart.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  const getCartTotalSum = () => {
    return DIYCart.reduce(
      (sum, {price}) => sum + price, 0
    )
   
  }
  const clearCart = () => {
    setDIYCart([]);
  }


  //returns the ingredients fetched prior
  const DIYPizzaConstructor = ingredientsTable[0]?.map((ingredient, index) => {//so the issue here is that the products index has the custom pizza template in it. the question mark makes it possible to ignore it

            if (ingredient.category === "Toppings") {
                return(
                    <>
                    <div>
                        <div className="card" style={{width: 18 +'em'}} key={index} onClick={()=>addIngredientToCart(ingredient)}>
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

    <div id="ingredientsConstructor">{DIYPizzaConstructor}</div>

    <div id='DIYPizzaCart'>
        {
        DIYCart.map((ingredient, index) => (
          <>
            <div className='ItemsInCart' key={index}>
              <h3>{ingredient.name}</h3>
              <h4>{ingredient.price}</h4>
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
    
    <div id="clearCart">
      <button type="button" className="btn btn-danger" onClick={clearCart}>Clear Pizza</button>
    </div> 
  </>
  )
 
}

export default DIYPizza;
