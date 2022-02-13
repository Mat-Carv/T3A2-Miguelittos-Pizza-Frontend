import React from "react";
import {useNavigate, Route} from "react-router-dom";

import miguelittosLocationMap from "../images/Miguelittos_Pizeria_Location.png";
import {signOut} from '../../services/authServices';
import Title from "../Header/Header";
import pizzaPhoto from "../images/pizzaPhoto.jpg";

//Note to markers. Due to MIME type errors... for like the 10th FUCKING time in this assignment... making it imposible to deploy a project that has touched my computer, 
// the final project had to be deployed via a fork on my team mates computer from one commit back

const LandingPage = () => {
    let navigate = useNavigate();
    
    function goToPizzaMenu(){
        navigate('/PizzaMenu')
    }

    function goToDIYPizzas(){
        navigate ('/DIYPizza')
    }

    function goToSignup(){
        navigate ('/SignUp')
    }

    function goToSignin(){
        navigate ('/SignIn')
    }

    function endSession(){
        signOut()
        navigate ('/')
    }

    function userButtons(){
        if (sessionStorage.token) {
            return <>
                <span>{sessionStorage.user}</span>
                <button id="SignOutBtn" onClick={endSession} className= "btn btn-primary">Sign Out</button>
            </>
            
        } else {
            return <>
            <div>
                <div className="card">
                    <button id="SignUpBtn" onClick={goToSignup} className= "btn btn-primary">Sign Up</button>
                </div>
            
                <p></p>
                <div className="card">
                    <button id="SignInBtn" onClick={goToSignin} className= "btn btn-primary">Sign In</button>
                </div>
            </div>
            </>  
        }
        
    }

    return(
        <>
        <Title />
        <div id="LandingPageContent" className="card-group">
            <div id="hero" className="container">
            <p></p>
            <div id="userButtons" className="col">
            {userButtons()}
            </div>
            <p></p>
            <div className="card-group">
            
            <div id="ClassicMenuSection" onClick={goToPizzaMenu} className="card col border-0" style={{height: 25 +'em'}} >
                <div className="row no-gutters">
                
                    <div className="card text-dark bg-danger col" style={{width: 20 +'em'}}>
                    <img src={pizzaPhoto} alt="photo of a pizza" className="card-img-top rounded-top" />
                        <div className="col">
                        
                            <div className="card-body">
                            
                                <h5 className="card-title">Classic Pizzas</h5>
                                <p className="card-text">Browse from our selection of classic pizzas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p></p>
                <div id="MakeYourOwnSection" onClick={goToDIYPizzas} className="card col border-0" >
                    <div className="row no-gutters">
                    <div className="card text-dark bg-warning col-mb-3" style={{width: 20 +'em'}} > 
                    <img src={pizzaPhoto} alt="photo of a pizza" className="card-img-top reounded-top"/>
                        <div className="col md-8">
                            <div className="card-body">
                            <h5 className="card-title">Design Your Own Pizza</h5>
                            <p className="card-text">Create your perfect pizza from our selection of the freshest ingredients available</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <div id= "aboutUs" className="col bg-dark text-white">
                <div id="aboutUsTitle" className="fs-3 col">
                    About Miguelittos Pizza
                </div>
                <div className="col">
                <p id="aboutUsBlurb" className="fs-5">Miguelitto's Pizzeria is a traditional Italian Pizzeria that uses only the best and freshest ingredients to create the pizza of your dreams</p>
                </div>
                <div id="contactDetails" className="border col rounded text-white bg-dark">
                    <div id="phone">Phone: 0455 555 555 555</div>
                        <p></p>

                    <div id="Address">Address: 123 Fake St, Sydney</div>
                        <p></p>

                    <div id="Instagram">Instagram: <a href ="https://www.instagram.com/" className="text-decoration-none">Instagram</a> </div>
                        <p></p>
                    
                    <div id="Facebook">Facebook: <a href ='https://www.facebook.com/' className="text-decoration-none">Facebook</a>
                    </div>
                        <p></p>
        
                    <div id="Myspace">Myspace: <a href="https://myspace.com/" className="text-decoration-none">Myspace</a></div>
                        <p></p>
                </div>

                <div id="aboutUsMap" className="col card bg-dark text-white">
                    <h3>Come Find Us</h3>
                    <img src={miguelittosLocationMap} alt="Map totally showing the location of miguelittos pizzeria in Brazil"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage