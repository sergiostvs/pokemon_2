import { useEffect, useState } from "react";
import { Container } from "./style";

import { PokemonFiltered } from "../PokemonFiltered";

export function FilterPokemon() {
  const [handleTypes, setHandleTypes] = useState("");
  const [typeResults, setTypeResults] = useState([]);
  const [types, setTypes] = useState([]);

  async function fetchTypes() {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const data = await response.json();
    setTypes(data.results);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    setTypeResults([]);
    fetch(`https://pokeapi.co/api/v2/type/${handleTypes}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.pokemon;
        const promisesArray = results.map(async (poke) => {
          return fetch(`${poke.pokemon.url}`).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then(setTypeResults);
  }, [handleTypes]);

  return (
    <Container>
      <div className="filter">
        <select
          className="filter-box"
          onChange={(select) => {
            const change = select.target.value;
            setHandleTypes(change);
          }}
          name="categoria"
          value={handleTypes}
        >
          <option value="">Filtrar</option>
          {types.map((type) => {
            return (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filtered">
        {typeResults.map((data) => {
          return(
            <PokemonFiltered pokemon={data} key={data.id}/>
          );
        })}
      </div>
    </Container>
  );
}
