import React from "react";
import { useNavigate } from "react-router-dom";
import miguelittosLogo from '../images/MiguelittosPizeriaCircle.png'

function Title () {

    let navigate = useNavigate()

    function goToMainMenu(){
        navigate('/')
      }

    return(
        <div>
            <img src={miguelittosLogo} alt="miguelittos logo" onClick={goToMainMenu}/>

            <h1>Miguelitto's Pizza</h1>
        </div>

    )

}

export default Title