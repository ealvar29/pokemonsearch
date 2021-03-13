import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
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
    const response = fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    ).then((response) => {
      setPokemonData({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base.stat,
        attack: response.data.stats[1].base.stat,
        defense: response.data.stats[3].base.stat,
        type: response.data.types[0].type.name,
      });
      setChosen(true);
    });
    console.log(response);
  };

  return (
    <div className="App">
      <input
        className="border-b-2 border-black px-4"
        type="text"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button
        className="rounded text-white bg-blue-500 p-2 text-sm"
        onClick={searchPokemon}
      >
        Search Pokemon
      </button>

      <div>
        {!chosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.img} alt={pokemonData.name} />
            <h2>{pokemonData.species}</h2>
            <h2>{pokemonData.type}</h2>
            <h2>{pokemonData.hp}</h2>
            <h2>{pokemonData.attack}</h2>
            <h2>{pokemonData.defense}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
