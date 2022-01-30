import { useEffect, useState } from "react";
import { FilterPokemon } from "./components/FilterPokemon";
import { GlobalStyle } from "./styles/global";
import Pokedex from "./components/PokemonList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const api = "https://pokeapi.co/api/v2/";
const LIMIT = 4;

export function App() {
  const [info, setInfo] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pokemonSearch, setPokemonSearch] = useState([]);

  const searchPokemon = async (pokemonSearch) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return;
    }
    const result = await searchPokemon(pokemon);
    if (!result) {
      return;
    } else {
      setPokemonSearch([result]);
    }
  };

  useEffect(() => {
    setInfo([]);

    fetch(`${api}pokemon?limit=${LIMIT}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map(async (result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then(setInfo);
  }, [offset]);

  return (
    <>
      <Header onSearch={onSearch}/>
      <FilterPokemon pokemons={pokemonSearch}/>
      <Pokedex
        pokemon={info}
        limit={LIMIT}
        total={100}
        offset={offset}
        setOffset={setOffset}
      />
      <Footer />
      <GlobalStyle />
    </>
  );
}
