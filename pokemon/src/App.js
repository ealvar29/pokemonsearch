import { useState, useEffect } from "react";
import "./App.css";
import imgSrc from "./trainer.png";
import template from "./pokemonTemplate.png";

function App() {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [chosen, setChosen] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((response) => {
        setPokemonData({
          name: pokemonName,
          moves: response.moves[0].move.name,
          img: response.sprites.front_default,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defense: response.stats[3].base_stat,
          type: response.types[0].type.name,
        });
        setChosen(true);
      });
  };

  return (
    <div className="">
      <input
        className="block px-4 m-auto border-b-2 border-black"
        type="text"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button
        className="block p-2 m-auto my-2 text-sm text-white bg-blue-500 rounded"
        onClick={searchPokemon}
      >
        Search Pokemon
      </button>
      <div className="relative flex text-center">
        <img
          src={template}
          alt="background template"
          width="1000"
          height="900"
          className="self-center block m-auto"
        />
        {!chosen ? (
          <p></p>
        ) : (
          <div className="absolute right-36 top-10">
            <p>
              Pokemon Name:{" "}
              {pokemonData.name.charAt(0).toUpperCase() +
                pokemonData.name.slice(1)}
            </p>
            <img
              className="w-14 h-14"
              src={pokemonData.img}
              alt={pokemonData.name}
            />
            <p>
              {pokemonData.name.charAt(0).toUpperCase() +
                pokemonData.name.slice(1)}
              {"'s "}
              Special Move:{" "}
              {pokemonData.moves.charAt(0).toUpperCase() +
                pokemonData.moves.slice(1)}
            </p>
            <p>
              Pokemon Type:{" "}
              {pokemonData.type.charAt(0).toUpperCase() +
                pokemonData.type.slice(1)}
            </p>
            <p>HP: {pokemonData.hp}</p>
            <p>Attack: {pokemonData.attack}</p>
            <p>Defense: {pokemonData.defense}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
