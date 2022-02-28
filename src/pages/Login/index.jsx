import { useState, useContext } from "react";

import { AuthContext } from "../../Contexts/auth"

import { Container } from "./style";

const UserLogin = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName, password);
  };

  return (
    <Container>
      <div className="content">
        <h1 className="user-login__title">Login<br/><strong>Senha: 123</strong></h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="text"
              name="userName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="user-login__submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    </Container>
  );
};

export default UserLogin;
