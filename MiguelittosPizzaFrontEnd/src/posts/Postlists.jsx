import React, { Component } from 'react';
import TestIngredients from './TestIngredients.json';// fetch (data,json)
export default class Postlists extends Component {

    
  render() 
    {
        return (//collapsed to one line
            <>
                <div>Hello There</div>
                    {TestIngredients.map((pizza)=> {return (<><h3>{pizza.name}</h3><h3>{pizza.id}</h3></>)})}

                    
            </>
        )
    }
    
}
