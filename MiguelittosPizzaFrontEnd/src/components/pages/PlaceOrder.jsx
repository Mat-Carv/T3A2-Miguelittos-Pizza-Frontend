import React from "react";
import { useState, useContext } from "react";
import { renderMatches } from "react-router";

import Title from "../Header/Header";
import Context from "../context/context";

const PlaceOrder = () => {
     
    const {context, setContext} = useContext(Context)

    function getPizzacart() 
    {
        let data = context.cartFinalised;//this could also be session storage in the live, but because I have to KEEP F**KING RESTARTING VITE TO GET IT TO UPDATE, thatway lies madness
            //data = JSON.parse(data)
            console.log(data)

            if (data!= null)
                return(
                        data.reduce(
                            (sum, {price}) => sum + price, 0
                        ).toFixed(2)
                    )
            else return(console.log("There is no cart"))
        }

    return(
        <>
        <Title />
        <h1>Place Order Page</h1>
        <div>Your total: {getPizzacart()}</div>
        <div>Your Pizzas will be ready in 30 minutes!</div>
        <div>
        </div>
        </>
    )

}

export default PlaceOrder