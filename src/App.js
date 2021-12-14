import React, { useState, useEffect } from 'react';
//components
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
  //state principal
  //ciudad = state, guardarCiudad = this.setState()
  const [ ciudad , guardarCiudad  ] = useState ('');
  const [ pais , guardarPais ] = useState ('');

  //error
  const [ error, guardarError] = useState(false);

  //api
  const [ resultado, guardarResultado] = useState({});

  //useEffect para saber en que parte del state sera llamado el metodo consultarApi
  useEffect(() => {
    //prevenir ejecucion
    if(ciudad === '') return;
    const consultarApi = async () => {
      //api
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=467eb2e2a1738c82e813a30610d7c354`;
      //consultar la direccion url
      const respuesta = await fetch(url);
      //se trae los datos de la api y se consume
      const resultado = await respuesta.json();
      guardarResultado(resultado);
    }
    consultarApi();
  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    //validar que ambos campos esten 
    if(datos.ciudad === '' || datos.pais === '') {
      //error
      guardarError(true);
      return;
    }
    //si la ciudad y el pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  //Cargar un component condicionalmente
  let camposVacios;
  let noResult;
  let clima;
  if(error) {
    //hay un error
    camposVacios = <Error mensaje ='Ambos campos son obligatorios' />
  } else if(resultado.cod === "404"){
    noResult = <Error mensaje="No hay resultado"/>
  } else {
    //mostrar clima
    clima = <Clima resultado={resultado}/>;
  }

  return (
    <div className="App">
      <Header/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              {camposVacios}
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {noResult}
              {clima}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
