import React, { Component } from 'react';
import TestIngredients from './TestIngredients.json';

export default class Postlists extends Component {
  render() 
    {
        return (
            <>
                <div>Hello There</div>
                {TestIngredients.map((postDetail, index)=> {
                    return (//not sure if this is bad n notation
                        <>
                        <h3>{postDetail.name}</h3>
                        <h3>{postDetail.price.toPrecision(3)}</h3>
                        </>//toPrecisison is probably a poor solution here, since it hardcodes the number of decimal points
                    )
                })}
            </>
        )
    }
    
}
