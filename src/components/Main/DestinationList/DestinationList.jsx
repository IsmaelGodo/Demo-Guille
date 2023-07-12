import React, { useState, useEffect } from "react";
import DestinationItem from "../DestinationItem/DestinationItem";

const DestinationList = () => {

  const misDestinos = [{
    nombre: " Mi pueblo",
    pais: "Cordoba",
    precio: "-300 €"
  },
  {
    nombre: " Madrid",
    pais: "España",
    precio: "2300 €"
  },
  {
    nombre: " Sevilla",
    pais: "España",
    precio: "400 €"
  }



  ];

const [destinos, setDestinos ] = useState(misDestinos);
const addDestino = (event) => {

  event.preventDefault();
  const nombre = event.target[0].value;
  const pais = event.target[1].value;
  const precio = event.target[2].value;
  const newDestino = {nombre, pais, precio};
  setDestinos([...destinos, newDestino]);
}
  const deleteDestino =(i) =>{
    
    const remainingDestinos = destinos.filter((elm,j) => i !== j);
    setDestinos (remainingDestinos);


  }
  

  

  return <section>
    <h2>Mis Destinos Favortos</h2>
    {destinos.map((elm, i) =><DestinationItem nombre={elm.nombre} pais={elm.pais} precio={elm.precio}
    deleteDestino={() => deleteDestino(i)} key={i}/>)}

    <form onSubmit={addDestino}>
    <input type="text" placeholder="Nombre"/>
    <input type="text" placeholder="pais"/>
    <input type="text" placeholder="precio"/>
    <input type="submit" value="añadir"/>
    </form>


      </section>;
};

export default DestinationList;
