import React from "react";

import "../styles/pokedexStyle.css";

import getColor from "../utils/getColors";

export default function Pokedex() {
  const pokemons = [
    {
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Ivysaur",
      type: ["Grass", "Poison"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      name: "Venusaur",
      type: ["Grass", "Poison"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      name: "Charmander",
      type: ["Fire"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Charmeleon",
      type: ["Fire"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      name: "Charizard",
      type: ["Fire", "Flying"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
    {
      name: "Squirtle",
      type: ["Water"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Wartortle",
      type: ["Water"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    },
    {
      name: "Blastoise",
      type: ["Water"],
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    },
  ];

  return (
    <div className="container">
      {pokemons.map((poke, index) => {
        const colorType = getColor(poke.type[0]);

        return (
          <div className="poke-infos" style={{ backgroundColor: colorType }}>
            <div className="circle">
              <img src={poke.url} alt={poke.name} />
            </div>
            <h3>{index + 1 + ". " + poke.name}</h3>
            <div className="poke-type">
              {poke.type.map((type) => {
                return <p>{type}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
