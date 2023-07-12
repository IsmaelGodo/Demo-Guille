import React from "react";
import { useState, useEffect } from "react";

const FechApi = () => {

  const [pokemons, setPokemons] = useState([]);

        useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data.results);
        }
        getPokemons();
    }, []);

  return <section>
    


  </section>;
};

export default FechApi;
