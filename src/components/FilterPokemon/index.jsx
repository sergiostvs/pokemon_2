import { useEffect, useState } from "react";
import { Container } from "./style";
import Pagination from "../../Pagination";

import loading from "../../assets/loading.png";
import { PokemonFiltered } from "../PokemonFiltered";
import { Pokemon } from "../Pokemon";

const PageSize = 6;

export function FilterPokemon(props) {
  const { pokemons } = props;
  const [types, setTypes] = useState([]);
  const [handleTypes, setHandleTypes] = useState("normal");
  const [typeResults, setTypeResults] = useState([]);
  const [typePagination, setTypePagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    let results = typeResults.slice(firstPageIndex, lastPageIndex);
    setTypePagination(results);
  }, [currentPage, typeResults]);

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
          return fetch(`${poke.pokemon.url}`).then((response) =>
            response.json()
          );
        });
        return Promise.all(promisesArray);
      })
      .then(setTypeResults);
  }, [handleTypes]);

  return (
    <Container>
      <div className="search-results">
        <div>
          {pokemons.map((pokemon) => {
            return (
              <>
                <p className="resultado">Resultado da busca:</p>
                <Pokemon pokemon={pokemon} key={pokemon.name} />
              </>
            );
          })}
        </div>
      </div>
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
      <div>
        {typePagination.length > 0 ? (
        <div className="filtered">
          {typePagination.map((data) => {
            return <PokemonFiltered pokemon={data} key={data.id} />;
          })}
        </div>
        ) : (
          <div className="loading">
            <p className="loading-text">Carregando...</p>
            <img src={loading} alt="Carregando" />
          </div>
        )}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={typeResults.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
}
