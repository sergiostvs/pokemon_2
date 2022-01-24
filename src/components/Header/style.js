import styled from "styled-components";

export const HeaderBox = styled.header`
  background: #524153;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0.4rem;
    max-width: 1920px;

    .searchbar {
      background: #fff;
      width: 100%;
      border-radius: 0.3rem;
      padding: 0.6rem;
      margin: 0 1rem;
      border: 0;
    }
  }

  .logo-poke {
    width: 9rem;

    @media(max-width: 700px){
      width: 5rem;
    }
  }

  .logo-competi {
    width: 9rem;
    margin-left: 1rem;

    @media(max-width: 700px){
      width: 5rem;
    }
  }

  .login-btn {
    font-size: 1rem;
    color: #fff;
    background: #7e7394;
    border: 0.15rem solid #000;
    border-radius: 0.6rem;
    padding: 0.3rem 2rem;
    transition: filter 0.2s;

    @media(max-width: 700px){      
      position: absolute;
      right: 1rem;
      top: 4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

`;
