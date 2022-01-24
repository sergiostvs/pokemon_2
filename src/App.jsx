import { useEffect, useState } from "react";
import { FilterPokemon } from "./components/FilterPokemon";
import { GlobalStyle } from "./styles/global";
import { Pokedex } from "./components/PokemonList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then(response => response.json())
      .then(data => {
        let results = data.results;
        let promisesArray = results.map(async result => {
          return fetch(result.url).then(response => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then(data => setPokemons(data));
    }, []);
    
  return (
    <>
      <Header />
      <FilterPokemon />
      <Pokedex pokemon={pokemons}/>
      <Footer />
      <GlobalStyle />
    </>
  );
}
