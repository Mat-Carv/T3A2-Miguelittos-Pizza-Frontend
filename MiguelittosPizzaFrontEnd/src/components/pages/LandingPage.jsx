import React from "react";
import {useNavigate, Route} from "react-router-dom";
import pizzaLogo from '../images/MiguelittosPizeriaCircle.png';



const LandingPage = () => {
    let navigate = useNavigate();
    
    function goToPizzaMenu(){
        navigate('/PizzaMenu')
    }

    function goToDIYPizzas(){
        navigate ('/DIYPizza')
    }

    return(
        <>
        <div id="LandingPageContent">
        <h1 id="landingPageTitle">Miguelitto's Pizzeria</h1>
        <img src = {pizzaLogo}/>
        <p></p>
        <span id="hero" >
        {/* <img src="MiguelittosPizzaFrontEnd/src/images/miguelittosPizeriaLogo.png" alt="Miguelittos Pizza Logo in a circle" /> */}
        <p></p>
        <div id="ClassicMenuSection" onClick={goToPizzaMenu}>
             <div className="card mb-3" style={{width: 25 +'em'}}>
             
             <div className="row no-gutters">
                <h5 className="card-title">Classic Pizzas</h5>
                <p className="card-text">Browse from our selection of classic pizzas</p>
                
             </div>
            </div>
        </div>

        <p></p>
        <div id="MakeYourOwnSection" onClick={goToDIYPizzas}>
            <div className="card mb-3" style={{width: 25 +'em'}}>
                
                <div className="row no-gutters">
                    <h5 className="card-title">Design Your Own Pizza</h5>
                    <p className="card-text">Create your perfect pizza from our selection of the freshest ingredients available</p>
                </div>
                </div>
        </div>
        </span>

        <span id= "aboutUs">
            <div id="aboutUsTitle">
                About Miguelittos Pizza
            </div>
            <p id="aboutUsBlurb">Miguelitto's Pizzeria is a traditional Italian Pizzeria that uses only the best and freshest ingredients to create the pizza of your dreams</p>

            <div id="contactDetails">
                <div id="phone">Phone: 0455 555 555 555</div>
                    <p></p>

                <div id="Address">Address: 123 Fake St, Sydney</div>
                    <p></p>

                <div id="Instagram">Instagram:</div>
                    <p></p>
                
                <div id="Facebook">Facebook:</div>
                    <p></p>
      
                <div id="Myspace">Myspace:</div>
                    <p></p>
            </div>

            <div id="aboutUsMap"></div>
        </span>
        </div>
        </>
    )
}

export default LandingPage