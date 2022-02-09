import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { HeaderBox } from "./style";
import pokemon from "../../assets/pokemon.svg";
import competi from "../../assets/competi-logo.svg";
import { Link } from "react-router-dom";

export function Header(props) {
  const { onSearch } = props;
  const { authenticated, user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderBox>
      <div className="content">
        <Link to={"/"}>
          <img
            className="logo-poke"
            draggable="false"
            src={pokemon}
            alt="Pokemon"
          />
        </Link>
        <div className="control">
          <input
            className="searchbar"
            onChange={(e) => {
              onSearch(e.target.value.toLowerCase());
            }}
            placeholder="Buscar Pokémon"
          />
          {authenticated === false ? (
            <Link to={"/login"}>
              <button className="login-btn">Login</button>
            </Link>
          ) : (
            <>
              <Link to={"/pokedex"}>
                <button className="login-btn">{String(user.userName)}</button>
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          )}
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
