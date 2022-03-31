import { useState } from 'react';
import './App.css';
import ReyComponent from './components/ReyComponent';

function App() {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

  const [total, setTotal] = useState(0);

  return (
      <>
        
        <h1>Total a pagar: {total}€</h1>
        <div className='cajaReyes'>
        {reyes.map((rey, index)=>(
          
            <ReyComponent key={index} 
              datos={{nombre: rey.nombre, color: rey.color, precio: rey.precio, setTotal: setTotal}}/>
          
        ))};
        </div>
        {/* <MiComponente nombre="Jose" coches={1}/> */}
        {/* <MiComponente datos={['Jose', 1]}/> */}
        {/* <MiComponente datos={{nombre:'Jose', coches: 1}}/> */}
      </>
  );
}

export default App;
