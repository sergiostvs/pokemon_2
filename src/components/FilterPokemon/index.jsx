import { useEffect, useState } from "react";
import { Container } from "./style";

export function FilterPokemon() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((json) => {
        setTypes(json.results);
      });
  }, []);

  return (
    <Container>
      <div className="filter">
        <select className="filter-box" name="categoria">
          {types.map((type) => {
            return (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filtered"></div>
    </Container>
  );
}
