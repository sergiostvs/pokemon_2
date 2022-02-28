import { Container } from "./style";
import { Pokemon } from "../Pokemon";

import back from "../../assets/back.svg";
import next from "../../assets/next.svg";
import loading from "../../assets/loading.png";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pokedex = ({ pokemon, limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <Container>
      <div className="box-list">
        {pokemon.length > 0 ? (
          <div className="pokedex-grid">
            {pokemon.map((pokemon) => {
              return <Pokemon pokemon={pokemon} key={pokemon.name} />;
            })}
          </div>
        ) : (
          <div className="loading">
            <p className="loading-text">Carregando...</p>
            <img src={loading} alt="Carregando" />
          </div>
        )}
      </div>
      <ul className="pagination">
        <li>
          <button
            className="next"
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            <img draggable="false" src={back} alt="Voltar" />
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={page === current ? "pagination__item--active" : null}
              >
                {page}
              </button>
            </li>
          ))}
        <li>
          <button
            className="back"
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            <img draggable="false" src={next} alt="Próximo" />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Pokedex;
