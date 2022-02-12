// import React from 'react'
import React, {useState} from 'react';
<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
import {signUp} from '../../services/authServices';
import {useNavigate, Route} from "react-router-dom";

function SignUp(props) {

    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        password_confirmation : ""
=======
import {signIn} from '../../services/authServices';
import {useNavigate, Route} from "react-router-dom";

function SignIn(props) {

    const [state , setState] = useState({
        email : "",
        password : ""
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.password_confirmation) {
            sendDetailsToServer()    
        } else {
            console.log('Passwords do not match');
        }
    }   
=======
    }  
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
    
    const navigate = useNavigate()

    function redirectToHome() {
        navigate('/')
    }

<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
           
            const payload={
                "name":state.name,
                "email":state.email,
                "password":state.password,
                "password_confirmation":state.password_confirmation
            }
            
            signUp(payload)
                .then(({name, jwt}) => {                 
=======
    const sendDetailsToServer = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
           
            const payload={
                "email":state.email,
                "password":state.password
            }
            
            signIn(payload)
                .then(({name,jwt}) => {                 
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
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
<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
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
=======
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
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
<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
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
=======
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={sendDetailsToServer}
                    >Sign In
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
                </button>
            </form>
        </div>
    )
}

<<<<<<< Updated upstream:src/components/pages/SignUp.jsx
export default SignUp
=======
export default SignIn
>>>>>>> Stashed changes:src/components/pages/SignInForm.jsx
