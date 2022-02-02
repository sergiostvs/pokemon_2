import { HeaderBox } from "./style";
import pokemon from "../../assets/pokemon.svg";
import competi from "../../assets/competi-logo.svg";

export function Header(props) {
  const { onSearch } = props;

  return (
    <HeaderBox>
      <div className="content">
        <img
          className="logo-poke"
          draggable="false"
          src={pokemon}
          alt="Pokemon"
        />
        <div className="control">
          <input
            className="searchbar"
            onChange={(e) => {
              onSearch(e.target.value.toLowerCase());
            }}
            placeholder="Buscar Pokémon"
          />
          <button className="login-btn">Login</button>
        </div>
        <img
          className="logo-competi"
          draggable="false"
          src={competi}
          alt="Competi"
        />
      </div>
    </HeaderBox>
  );
}
