import { useContext } from "react";
import { Header } from "../../components/Header";
import { AuthContext } from "../../Contexts/auth";
import { Container } from "./style";

const Pokedex = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Container>
        <h3 className="pkdx-user">Pokedex {String(user.userName)}</h3>
      </Container>
    </>
  );
};

export default Pokedex;
