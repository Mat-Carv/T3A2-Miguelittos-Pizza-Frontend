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

      function refreshPage(){
          window.location.reload(false);
      }
        
    const MarkOrderComplete = () => {
        
        const orderIDASecondTime = orders.map((newOrder, orderIndex) => {
           return (newOrder.id)
        })

        const payload = {
            "complete": true
        }
            apiUrl.put('/api/admin/orders/'+orderIDASecondTime, payload)
            .then(function (response) {
                if(response.status === 201)
                {
                    console.log('success: Order marked complete')
                    refreshPage()
                } else{
                    console.log("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });   
      }

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
                            <div>{newOrder.pizza.map((aPizza,idx) =>(
        
                                <><></><div>
                                    Pizzas Type: {aPizza.name}
                                </div><div>
                                        Pizza base: {aPizza.base}
                                    </div><div>
                                        Pizza Sauce: {aPizza.sauce}
                                    </div><div>
                                        Pizza Toppings:
                                        <div>{Object.keys(aPizza.toppings).map(function (key) {
                                            var topping = aPizza.toppings[key];
                                            return (
                                                <div>
                                                    {key}: {topping}
                                                </div>
                                            );
                                        }
                                        )}</div>

                                    </div></>
                                ))
                            }
                            </div>
                            <div>
                            Drinks: {newOrder.drink}
                            </div>
                            <div>
                            Sides: {newOrder.side}
                            </div>
                        </div>
                        <div>
                            <button onClick={MarkOrderComplete}>Mark Complete</button>
                        </div>
                    </div>
                </div>
                </>
            )
    })
            return( EachOrder)
                
            
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