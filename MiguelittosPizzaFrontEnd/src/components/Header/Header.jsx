import React from "react";
//import { useNavigate } from 'react-router-dom';
import miguelittosLogo from '../images/MiguelittosPizeriaCircle.png'

const Title = () => {
    //const navigate = useNavigate();//so including this functionality creates a memory leak. I guess it has something to do with the useNavigate being in App, cause the routes are there

    return(
        <><div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={miguelittosLogo} alt="miguelittos logo" style={{width: 7 +'em'}}/>
                </div>
                <div className="col">
                    <h1>Miguelitto's Pizzeria</h1>
                </div>
            </div>
        </div></>

    )
}

export default Title