import { useState } from 'react'

const PAGE_PIZZAS = 'pizzas';
const PAGE_CART = 'cart';


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PIZZAS);


  const [pizzas] = useState([//placeholder for backend summons
    {
      name: 'Hawaiian',
      price: '20.99',
      image: 'https://i.guim.co.uk/img/media/5c235055a8b803a634b5d1eb6649a42c03393b8a/0_182_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b0e73a4fe0d4803537c85d9e9eac6072'
    },
    {
      name: 'Neapolitan',
      price: '15.99',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    }
  ]);

  const addToCart = (pizza) => {
    console.log(pizza.name + " added to cart");
    setCart([...cart,pizza]);
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderCart =() => {
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
    <div className="App">
      <header>
        <button onClick={()=> navigateTo(PAGE_CART)}>
          Show Cart ({cart.length})
        </button>
      </header>
      {page === PAGE_PIZZAS && 
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

      {page === PAGE_CART &&  
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
            <button>Remove?</button>
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

export default App;