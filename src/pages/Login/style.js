import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .content {
    background: #d4c3a3;
    width: 500px;
    padding: 1rem;
    border-radius: 1rem;

    .user-login {
      width: 400px;
      margin: 0 auto;
    }

    .user-login__title {
      font-size: 2rem;
      font-weight: 500;
      color: #524153;
      margin-bottom: 2rem;
      text-align: center;

      strong{
        font-size: 1rem;
        font-weight: 400;
      }
    }

    .user-login__form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .user-login__form-control label {
      margin-bottom: 0.5rem;
      color: #000;
      font-size: 1rem;
    }

    .user-login__form-control input {
      border-radius: 4px;
      border: 1px solid #bbbbbb;
      height: 36px;
      padding: 5px 10px;
    }

    .user-login__submit-button {
      width: 100%;
      font-size: 1rem;
      color: #fff;
      background: #7e7394;
      border: 0.15rem solid #000;
      border-radius: 0.6rem;
      padding: 0.3rem 2rem;
      margin-top: 1rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
