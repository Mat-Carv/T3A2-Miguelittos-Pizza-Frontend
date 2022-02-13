// import React from 'react'
import React, {useState} from 'react';
import {signIn} from '../../services/authServices';
import {useNavigate, Route} from "react-router-dom";

function SignIn(props) {

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

    function redirectToHome() {
        navigate('/')
    }

    function redirectToSignUp() {
        navigate('/SignUp')
    }

    function goToAdmin(){
        navigate ('/Admin')
    }

    const sendDetailsToServer = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
           
            const payload={
                "email":state.email,
                "password":state.password
            }
            
            signIn(payload)
                .then(({name,jwt}) => {                 
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
        <>
        <div className='bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center'>
            <div id='title' className=''>
                <h1 className=''>Sign in</h1>
            </div>
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center bg-dark text-white">
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
                <p></p>
    
                <div className="form-group text-left">
                    <button id="SignInBtn" onClick={redirectToSignUp} className='btn btn-primary'>SignUp</button>
                </div>

                <div className="form-group text-right">
                    <button id="SignInBtn" onClick={goToAdmin} className='btn btn-danger'>Admin</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default SignIn