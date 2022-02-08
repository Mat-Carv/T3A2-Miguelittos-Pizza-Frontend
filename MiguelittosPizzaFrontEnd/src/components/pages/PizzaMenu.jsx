import React, { Component, useEffect, useState } from 'react';



export class PizzaMenu extends Component {

  render() {
    // const [pizzas, setPizzas] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    // const fetchPizzas = () => {
    //   setIsLoading(true)

    //   fetch('https://pizzaria-miguel.herokuapp.com/api/pizzas/index')
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then (data => {
    //       setIsLoading(false)
    //       setPizzas(data)
    //     })
    // }

    // useEffect(()=> {
    //   fetchPizzas()
    // }, ['https://pizzaria-miguel.herokuapp.com/api/pizzas/index'])

  let pizzaFetch = fetch('https://pizzaria-miguel.herokuapp.com/api/pizzas/index')
  .then((response) => response.json())
  .then((response) => {JSON.parse(response)})
  .then((data) => {console.log(data)})
  
  .catch((error) => (console.log ("error: "+ error)))
    
      return(
        <div>
          {pizzaFetch.response}//no error
         
        </div>
           )
     
  }
}

export default PizzaMenu;
