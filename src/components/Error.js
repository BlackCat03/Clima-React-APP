import React from 'react';

function Error({mensaje}) {
    //component de error, se valida en APP
    return (
        <div className="card-panle red darken-4 error col s12">
            {mensaje}
        </div>
    )
}

export default Error;