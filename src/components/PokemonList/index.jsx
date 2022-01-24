import { Container } from "./style";
import { Pokemon } from "../Pokemon";

export function Pokedex(props) {
  return (
    <Container>
      <div className="pokedex-grid">
        {props.pokemon.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
    </Container>
  );
}
