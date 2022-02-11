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
    
    const getAnOrder = (number) => {

        let orderIDToGet = orders.filter( obj => obj.id == number)

        let OrderName = orderIDToGet.find(obj => obj = 'name')
        console.log(OrderName)
        
        return (
            <>
            <div>
            <div>Order ID: {OrderName.id}</div>
            <div>Client: {OrderName.name}</div>
            <div>Pizzas: {}</div>
            <div>Drinks: {OrderName.drink}</div>
            <div>Sides: {OrderName.side}</div>
            <div>
                <button>mark Complete</button>
            </div>
            </div>
            </>    
            )
    }


    const GetNewOrders = orders.map((newOrder, orderIndex) => {
        return(
            <>
            <div>
                <div id ='order1'>
                    <div>
                        {getAnOrder(1)}
                    </div>
                </div>
    
                <div id= 'order2'>
                        {}
                </div>
    
                <div id='order 3'>
    
                </div>
                <div> {newOrder, orderIndex}</div>
               
                </div>
            </>
        )
    })


    return(
        <>
        <Title />

        <div id="OrdersPanel">
                <div></div>
                <div>{GetNewOrders}</div>
        </div>
        </>
    )
} 

export default PendingOrders