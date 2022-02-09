import { useState } from 'react'

const PAGE_PIZZAS = 'pizzas';//these are the constants that change the page that is being loaded
const PAGE_CART = 'cart';


function StandardPizzas() {
const [cart, setCart] = useState([]);//created an empty shopping cart
const [page, setPage] = useState(PAGE_PIZZAS);//always start on the pizzas page


const addToCart = (pizza) => {
  console.log(pizza.name + " added to cart");
  setCart([...cart,{...pizza}]);//pushes the given pizza to the cart array as a new object, not a duplicate
}

const navigateTo = (nextPage) => {
  setPage(nextPage);//calls the change page
};

const removeFromCart =(pizzaToRemove) => {//removes a specific pizza object using the array.filter function. strictly speakign, this creates a new cart array with every item not the specific object that should be removed
  setCart(
    cart.filter((pizza) => pizza !== pizzaToRemove)
  );
};

const renderCart =() => {//I am doing something wrong with the offshoring
  <>
    <h1>Cart</h1>
    <p></p>
    <div className='cart'>
      {
        cart.map((pizza, index) => (
        <>
          <div className='pizzasInCart' key={index}>
            <h3>{pizza.name}</h3>
            <h4>{pizza.price}</h4>
            <p></p>
          </div>
        </>
        ))
      }
    </div>
  </>
}

const renderPizzas = ()=>{//okay for some reason I don't understand, offshoring these as functions doesn't work
  <>
  <h1>Pizzas</h1>
  <p></p>
    <div className='pizzas'>
    {
      pizzas.map ((pizza, index)=>(
        <>
          <div className='pizza' key={index}>
            <img src= {pizza.image} alt={pizza.name} width ='100' height = '100'></img>
            <h3>{pizza.name}</h3>
            <h4>{pizza.price}</h4>
            <button onClick={()=>addToCart(pizza)}>Add to Cart</button>
            <p></p>
          </div>
        </>
      ))
    }
  </div>
  </>
}

return (
  <div className="Standard Pizzas">
    <header>
      <button onClick={()=> navigateTo(PAGE_CART)}>
        Show Cart ({cart.length})
      </button>
      <button onClick={()=> navigateTo(PAGE_PIZZAS)}>
        Back to Pizzas
      </button>
    </header>
    {page === PAGE_PIZZAS && //this is the page that loops through the pizzas array
    <>
      <h1>Pizzas</h1>
      <p></p>
        <div className='pizzas'>
        {
          pizzas.map ((pizza, index)=>(
            <>
              <div className='pizza' key={index}>
                <img src= {pizza.image} alt={pizza.name} width ='100' height = '100'></img>
                <h3>{pizza.name}</h3>
                <h4>{pizza.price}</h4>
                <button onClick={()=>addToCart(pizza)}>Add to Cart</button>
                <p></p>
              </div>
            </>
          ))
        }
      </div>
      </>
    }

    {page === PAGE_CART &&  //shows the cart with stuff in it
    <>
    <h1>Cart</h1>
    <p></p>
    <div className='cart'>
      {
        cart.map((pizza, index) => (
        <>
          <div className='pizzasInCart' key={index}>
            <h3>{pizza.name}</h3>
            <h4>{pizza.price}</h4>
            <p></p>
          </div>
          <button onClick={() => removeFromCart(pizza)}>Remove?</button>
        </>
        ))
      }
      <p>
      </p>
      <button>Check Out</button>
    </div>
  </>
  }

  </div>
);
}

export default StandardPizzas;