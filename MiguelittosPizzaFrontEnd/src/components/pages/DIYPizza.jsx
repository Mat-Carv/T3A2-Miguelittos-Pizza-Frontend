import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Title from '../Header/Header';

const DIYPizza = () =>{
  const [ingredientsTable, setIngredients] = useState([])//get ingredients
  const [DIYCart, setDIYCart] = useState([])//creat a cart to build a pizza in

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

  function getPizzacartFromClassicMenu() 
  {
      let cartfromMiddata = localStorage.getItem('cartToDIY');//this could also be session storage in the live, but because I have to KEEP F**KING RESTARTING VITE TO GET IT TO UPDATE, thatway lies madness
      cartfromMiddata = JSON.parse(cartfromMiddata)

      console.log(cartfromMiddata)
      return(cartfromMiddata)
  }

  //returns the ingredients fetched prior
  const DIYPizzaConstructor = ingredientsTable[0]?.map((ingredient, index) => {//so the issue here is that the products index has the custom pizza template in it. the question mark makes it possible to ignore it

            if (ingredient.category === "Toppings") {
                return(
                    <>
                    <div>
                        <div className="card" style={{width: 18 +'em'}} key={index}>
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
                    <div className="card" style={{width: 18 +'em'}} key={index}>
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
                    <div className="card" style={{width: 18 +'em'}} key={index}>
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


  //console.log(ingredients[0])
  return( 
  <>
    <Title />

    <div id="ingredientsConstructor">{DIYPizzaConstructor}</div> 
  </>
  )
 
}

export default DIYPizza;
