import { useEffect, useState } from "react";
import { FilterPokemon } from "./components/FilterPokemon";
import { GlobalStyle } from "./styles/global";
import Pokedex from "./components/PokemonList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const api = "https://pokeapi.co/api/v2/";
const LIMIT = 5;

export function App() {
  const [info, setInfo] = useState([]);
  const [offset, setOffset] = useState(0);

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
      <Header />
      <FilterPokemon />
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
