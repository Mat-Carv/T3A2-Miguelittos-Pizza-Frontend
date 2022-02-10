import React from "react";
import { useNavigate } from 'react-router-dom';
import miguelittosLogo from '../images/MiguelittosPizeriaCircle.png'

const Title = () => {
    const navigate = useNavigate();

    return(
        <><div>
            <img src={miguelittosLogo} alt="miguelittos logo" onClick={navigate('/')} />

            <h1>Miguelitto's Pizzeria</h1>
        </div></>

    )
}

export default Title