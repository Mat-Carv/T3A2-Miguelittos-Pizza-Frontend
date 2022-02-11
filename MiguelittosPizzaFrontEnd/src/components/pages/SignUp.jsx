// import React from 'react'
import React, {useState} from 'react';
import {signUp} from '../../services/authServices';
import {useNavigate, Route} from "react-router-dom";

function SignUp(props) {

    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        password_confirmation : ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.password_confirmation) {
            sendDetailsToServer()    
        } else {
            console.log('Passwords do not match');
        }
    }   
    
    const navigate = useNavigate()

    function redirectToHome() {
        navigate('/')
    }

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            // console.log(null);
            const payload={
                "name":state.name,
                "email":state.email,
                "password":state.password,
                "password_confirmation":state.password_confirmation
            }
            
            signUp(payload)
                .then(({name, jwt}) => {                 
                    sessionStorage.user = name;
                    sessionStorage.token = jwt;
                    
                    redirectToHome()
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
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="name"  
                        placeholder="Enter name" 
                        value={state.name}
                        onChange={handleChange}
                    />
                </div>
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
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password_confirmation" 
                        placeholder="Password Confirmation"
                        value={state.password_confirmation}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                    >Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp