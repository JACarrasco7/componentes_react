import React from 'react';

export default function MiComponente(/*prop*//*{nombre, coches}*/{datos}) {
  return(

    // <h1>Hola {prop.nombre}, tienes {prop.coches} coches</h1>
    // <h1>Hola {nombre}, tienes {coches} coches</h1>
    // <h1>Hola {datos[0]}, tienes {datos[1]} coches</h1>    
    <h1>Hola {datos.nombre}, tienes {datos.coches} coches</h1>    



  )
}

MiComponente.defaultProps={
    nombre:'Jose Antonio',
    coches: '1'
}