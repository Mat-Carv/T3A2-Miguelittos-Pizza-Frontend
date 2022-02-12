import React from "react";
import { useState, useContext } from "react";
import { renderMatches } from "react-router";

import Title from "../Header/Header";
import Context from "../context/context";
import apiUrl from "../../config/api";
import {useNavigate} from "react-router";



function PlaceOrder () {
    
    const { cart, setCart } = useContext(Context);
    
    const navigate = useNavigate()

    function redirectToHome() {
        navigate('/')
    }

    // let payloadDataForPizzas = JSON.parse(localStorage.context).cartFinalised;
    

    let PizzaOven = cart.map(element => {
        return {
            name: element.name,
            base: element.base,
            sauce: element.sauce,
            toppings: element.toppings
        }
    });
    

    const [state , setState]= useState({
        user_id: 1,
        pizza: PizzaOven,
        side:[],
        drink:[]
    })



    function getPizzacart() 
    {
        // let data = JSON.parse(localStorage.context).cartFinalised;
          

            if (cart != null)
                return(
                        cart.reduce(
                            (sum, {price}) => sum + price, 0
                        ).toFixed(2)
                    )
            else return(console.log("There is no cart"))
        }

    const sendCartToBackEnd=() =>{
        
        const payload ={  
            "pizza": state.pizza,
            "side": state.side,
            "drink": state.drink
        }
       

        apiUrl.post('/api/orders/new', payload)

        .then(function (response) {
            if(response.status === 201){
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Order successful. Redirecting to home page..'
                }))
                redirectToHome();
                console.log(null)
                setContext(null)
            } else{
                console.log("Some error ocurred");
            }
        })
        .catch(function (error) {
            console.log(error);
        });   
    }
    
    return(
        <>
        <Title />
        <h1>Confirm Order</h1>
        <div>Your total: {getPizzacart()}</div>
        <button onClick={sendCartToBackEnd}>Place Order</button>
        <div id="ThisShouldBeAPopup">Your Pizzas will be ready in 30 minutes!</div>
        <div id='goBackTO Home'>
            <button onClick={redirectToHome}>Back to Home</button>
        </div>
        </>
    )

}

export default PlaceOrder