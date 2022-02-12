// import React from 'react'
import React, {useState} from 'react';
import {adminSignIn} from '../../services/authServices';
import {useNavigate, Route} from "react-router-dom";

function AdminSignIn(props) {

    const [state , setState] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }  
    
    const navigate = useNavigate()

    function redirectToOrders() {
        navigate('/PendingOrders')
    }

    const sendDetailsToServer = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
           
            const payload={
                "email":state.email,
                "password":state.password
            }
            
            adminSignIn(payload)
                .then(({name,jwt}) => {                 
                    sessionStorage.user = name;
                    sessionStorage.token = jwt;
                    
                    redirectToOrders()
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            console.log('Please enter valid username and password')    
        }
        
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={sendDetailsToServer}
                    >Sign In
                </button>
            </form>
        </div>
    )
}

export default AdminSignIn