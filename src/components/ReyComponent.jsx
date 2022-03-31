import React from 'react';

export default function ReyComponent({datos}) {

    const ruta = 'http://www.html6.es/img/rey';
    const imagen = ruta+datos.nombre+'.png';

    const style = {
        backgroundColor: datos.color,
    }

    const reservar=(elemento)=>{
        datos.setTotal((e) => e+datos.precio);
        elemento.target.parentNode.style.display = 'none';
    }

  return <>

    <div className='rey' style={style}>
        <h1>{datos.nombre}</h1>
        <img src={imagen} alt='rey'/>
        <div>Precio:</div>
        <div>{datos.precio}€</div>
        <button onClick={reservar}>Reservar</button>
    </div>

  </>;
}
