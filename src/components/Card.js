import React, { useState, useEffect } from "react";
import { getLeadingZeros, getTypesArr } from "../constants/functions.js";

const Card = (obj) => {
    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        const pokemon = obj.obj;

        fetch(pokemon.url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let pokemonObj = {
                    id: data.id,
                    formattedId: getLeadingZeros(data.id),
                    name: data.name.toUpperCase(),
                    types: getTypesArr(data.types),
                };
                setPokemonDetails(pokemonObj);
            })
            .catch((err) => {
                console.log("pokemon not found", err);
            });
    }, []);

    return (
        <a href={`${pokemonDetails.id}`} className="card grow">
            <img
                className="card__image"
                src={
                    pokemonDetails.id
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`
                        : "/pokeball.png"
                }
                alt=""
                width="160px"
                height="160px"
            />
            <br />
            <p className="card__title text--primary">{pokemonDetails.name}</p>
            <p className="card__subtitle text--primary">
                #{pokemonDetails.formattedId}
            </p>
            <div className="card__types">{pokemonDetails.types}</div>
        </a>
    );
};

export default Card;
