import React from "react";
import miguelittosLogo from '../images/MiguelittosPizeriaCircle.png'

const Title = () => {

    return(
        <><div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={miguelittosLogo} alt="miguelittos logo" style={{width: 7 +'em'}}/>
                </div>
                <div className="col">
                    <h1 className="fs-1">Miguelitto's Pizzeria</h1>
                </div>
            </div>
        </div></>

    )
}

export default Title