import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DIYPizza = () =>{
  const [ingredientsTable, setIngredients] = useState([])
  const ingredientsURL = 'https://pizzaria-miguel.herokuapp.com/api/products/index/1'

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

  const DIYPizzaConstructor = ingredientsTable[0]?.map((ingredient, index) => {//so the issue here is that the products index has the custom pizza template in it.
    
    return (
        <>
        <div>
            <div className="card" style={{width: 18 +'em'}} key={index}>
            <img src="[placeholder]" className='card-img' alt='ingredientimageshouldbehere'></img>
                <div className="card-img-overlay">
                <h4 className="card-title">{ingredient.name}  {ingredient.price}</h4>
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
  })


  //console.log(ingredients[0])
  return <div>{DIYPizzaConstructor}</div> 
 
}

export default DIYPizza;
