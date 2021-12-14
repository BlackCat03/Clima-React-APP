import React, { useState} from 'react';

function Formulario({datosConsulta}) {
    //state del component
    //busqueda = state, guardarBusqeda = this.setState([])
    const [datos, guardarDatos] = useState({
        ciudad : '',
        pais : ''
    })

    const onChange = e => {
        //cambia el state segun la informacion que recibe
        guardarDatos({
           ...datos,
           [e.target.name] : e.target.value 
        });
    }

    const consultarClima = e => {
        //evita que el form vuelva al estado default
        e.preventDefault();
        //pasa al component principal los datos que busca el usuario
        datosConsulta(datos);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={onChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={onChange} name="pais">
                    <option value="">-- Seleccion un Pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4 waves-input-wrapper" value="Buscar Clima"/>
            </div>
        </form>
    )
}

export default Formulario;