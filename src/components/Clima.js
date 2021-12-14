import React from 'react';

function Clima({resultado}) {
    const {name, main} = resultado;
    
    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className= "temperatura">
                    {parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>
                    Temperatura Máxima {parseFloat(main.temp_max - kelvin).toFixed(2)} &#x2103;
                </p>
                <p>
                    Temperatura Minima {parseFloat(main.temp_min - kelvin).toFixed(2)} &#x2103;
                </p>

            </div>
        </div>
    )
}

export default Clima;