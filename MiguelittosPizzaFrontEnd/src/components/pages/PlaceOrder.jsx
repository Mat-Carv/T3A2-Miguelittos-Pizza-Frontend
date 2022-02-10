import React from "react";
import { renderMatches } from "react-router";

const PlaceOrder = () => {

    function getPizzacart() 
    {
        let data = localStorage.getItem('cartToCheckout');//this could also be session storage in the live, but because I have to KEEP F**KING RESTARTING VITE TO GET IT TO UPDATE, thatway lies madness
            data = JSON.parse(data)

        console.log(data)
        return(data)
    }

    return(
        <>
        <h1>Place Order Page</h1>
        <div>{getPizzacart()}</div>
        <div></div>
        
        </>
    )

}

export default PlaceOrder