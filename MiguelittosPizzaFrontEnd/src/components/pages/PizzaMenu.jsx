import React, { Component } from 'react';

export class PizzaMenu extends Component {

    state = {
        loading: true,
        pizza: null,
    };

    async componentDidMount(){
        const url = "https://pizzaria-miguel.herokuapp.com/api/pizzas/index";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pizza: data.results[2], loading: false})//the 0 should be a variable but for testing...
       console.log(data)
    }

  render() {
    return (

    <div>
        {this.state.loading || !this.state.pizza  ? (
        <div>loading...</div>
         ) : (
        <div>
            <div>fetched</div>

        </div>)}
    </div>
    )
  }
}

export default PizzaMenu;
