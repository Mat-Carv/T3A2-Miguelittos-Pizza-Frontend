import React from "react";
import { useEffect, useState } from "react";
import Title from "../Header/Header";
import apiUrl from "../../config/api";

const PendingOrders = () =>{

    const summonOrdersURL = '/api/admin/orders/index'

    const [orders, setOrders] = useState([])


    useEffect(async () => {
        console.log("Orders fetched")
          try{
            const {status, data} = await apiUrl.get(summonOrdersURL) 
            console.log (status, data)
            setOrders(data)
          }
          catch(error){
              console.error(error + " in menu fetch")
          }
      }, [])

   function returnOrders(){ 
       
       const EachOrder = orders.map((newOrder, orderIndex) => {
        
        return(
            <>
            <div>
                <div id ='order'>
                    <div>
                        <div>
                        Order ID: {newOrder.id}
                        </div>
                        <div>
                        Name: {newOrder.name}
                        </div>

                        <div>
                            Pizzas
                        </div>

                        <div>
                        Drinks: {newOrder.drink}
                        </div>
                        <div>
                        Sides: {newOrder.side}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    })
   return EachOrder
    }

    return(
        <>
        <Title />

        <div id="OrdersPanel">
                <div>{returnOrders()}</div>
                
        </div>
        
        </>
    )
} 

export default PendingOrders