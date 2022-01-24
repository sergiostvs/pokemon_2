import { HeaderBox } from "./style";
import pokemon from "../../assets/pokemon.svg";
import competi from "../../assets/competi-logo.svg";

export function Header() {
  
  return (
    <HeaderBox>
      <div className="content">
        <img className="logo-poke" draggable="false" src={pokemon} alt="Pokemon" />        
        <input className="searchbar" placeholder="Buscar Pokémon" />
        <button className="login-btn">Login</button>
        <img className="logo-competi" draggable="false" src={competi} alt="Competi" />
      </div>      
    </HeaderBox>
  );
}
