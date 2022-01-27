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

  async function fetchTypesFilter() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${handleTypes}`
    );
    const data = await response.json();
    const pokeList = data.pokemon;
    pokeList.map(async (poke) => {
      const pokeDataType = await fetch(`${poke.pokemon.url}`);
      const dataPokeDataType = await pokeDataType.json();
      setTypeResults(dataPokeDataType);
    });
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    fetchTypesFilter();
  }, [handleTypes]);

  console.log(typeResults); //Os Pokemons filtrados por tipo estão no console, mas um de cada vez

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
        {typeResults && <PokemonFiltered typeResults={typeResults} />}
      </div>
    </Container>
  );
}
