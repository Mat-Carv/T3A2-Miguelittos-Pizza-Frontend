import React from "react";
import { renderMatches } from "react-router";

const PlaceOrder = () => {

    function getPizzacart() 
    {
        let data = localStorage.getItem('cartToCheckout');
            data = JSON.parse(data)

        console.log(data)
        return(data)
    }

    return(
        <>
        <h1>Place Order Page</h1>
        <p>{getPizzacart()}</p>
        </>
    )


    
}

export default PlaceOrder