import { Container } from "./style";

export function FilterPokemon(props) {
  return (
    <Container>
      <div className="filter">
        <select className="filter-box" name="categoria"></select>
      </div>
      <div className="filtered"></div>
    </Container>
  );
}
