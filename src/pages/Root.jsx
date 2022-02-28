import { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PagesHome from "./Home/Home";
import Pokedex from "./Pokedex/Pokedex";
import UserLogin from "./Login";
import { GlobalStyle } from "../styles/global";
import { AuthProvider, AuthContext } from "../Contexts/auth";

const PagesRoot = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<UserLogin />} />
          <Route
            exact
            path="/pokedex"
            element={
              <Private>
                <Pokedex />
              </Private>
            }
          />
          <Route exact path="/" element={<PagesHome />} />
          <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
};

export default PagesRoot;
