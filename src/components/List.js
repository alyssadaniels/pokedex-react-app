import React, { useState, useEffect } from 'react';
import Card from "./Card.js"

const List = (limit) => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit.limit)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [limit]);

    return (
        <div className="list">
            {pokemon.map((pokemonData) => (
                <Card obj={pokemonData} />
            ))}
        </div>
    );
};

export default List