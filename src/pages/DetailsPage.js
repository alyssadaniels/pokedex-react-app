import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLeadingZeros, getTypesArr }from "../constants/functions.js"

// # fetch data
// pokemon_data = requests.get(f"https://pokeapi.co/api/v2/pokemon/{number}/").json()
// pokemon_species_data = requests.get(f"https://pokeapi.co/api/v2/pokemon-species/{number}/").json()
// pokemon_evolution_data = requests.get(pokemon_species_data["evolution_chain"]["url"]).json()

const DetailsPage = () => {
    const { number } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + number;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let pokemonObj = {
                    id: data.id,
                    formattedId: getLeadingZeros(data.id),
                    name: (data.name).toUpperCase(),
                    types: getTypesArr(data.types),
                    height: data.height / 10,
                    weight: data.weight / 10,
                    nextId: ((data.id === 150) ? 1 : data.id + 1),
                    prevId: ((data.id === 1) ? 150 : data.id - 1)
                }
                setPokemonDetails(pokemonObj);
            })
            .catch((err) => {
                console.log("pokemon not found", err);
            });
    }, []);
    
    return (
        <>
            <div className="hero">
                <div className="hero__details text--secondary">
                    <h2>{pokemonDetails.name}</h2>
                    <p>#{pokemonDetails.formattedId}</p>
                    <br></br>
                    <p>HEIGHT: {pokemonDetails.height} METERS</p>
                    <p>WEIGHT: {pokemonDetails.weight} KILOGRAMS</p>
                </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}>
                </img>
            </div>

            <div className="footer">
                <a className="footer__link" href={pokemonDetails.prevId}>{`< PREV`}</a>
                <a className="footer__link" href="/">HOME</a>
                <a className="footer__link" href={pokemonDetails.nextId}>{`NEXT>`}</a>
            </div>

        </>
    )
}

export default DetailsPage;