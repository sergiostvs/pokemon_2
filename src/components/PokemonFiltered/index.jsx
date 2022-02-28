import { Container } from "../Pokemon/style";

export function PokemonFiltered(data) {
  
  return (
    <Container>
      <div className="container-id">
        <p className="pokemon-id">{data.pokemon.id}</p>
      </div>
      <div className="pokemon-img-container">
        <img
          draggable="false"
          src={data.pokemon.sprites.front_default}
          alt=""
          className="pokemon-img"
        />
      </div>
      <div className="types">
        {data.pokemon.types.map((type, idx) => {
          return (
            <div key={idx} className={type.type.name}>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="container-name">
        <h3 className="pokemon-name">{data.pokemon.name}</h3>
      </div>
    </Container>
  );
}
