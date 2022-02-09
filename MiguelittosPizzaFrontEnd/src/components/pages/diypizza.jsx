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
    
    return <div key={index}> {ingredient.name} </div>
  })


  //console.log(ingredients[0])
  return <div>{DIYPizzaConstructor}</div> 
 
}

export default DIYPizza;
