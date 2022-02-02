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

    @media(max-width: 768px){
      padding-bottom: 4.5rem;
    }

    @media(max-width: 425px){
      padding-bottom: 6.9rem;
    }

    .logo-poke {
      width: 9rem;
    }

    .control {
      display: flex;
      width: 100%;

      @media(max-width: 768px){
        position: absolute;
        top: 4.5rem;
        left: 0;
        padding-right: 1rem;
      }

      @media(max-width: 425px){
        padding: 0;
      }

      .searchbar {
        background: #fff;
        width: 100%;
        border-radius: 0.3rem;
        padding: 0.6rem;
        margin: 0 1rem;
        border: 0;
      }

      .login-btn {
        font-size: 1rem;
        color: #fff;
        background: #7e7394;
        border: 0.15rem solid #000;
        border-radius: 0.6rem;
        padding: 0.3rem 2rem;
        transition: filter 0.2s;

        @media (max-width: 425px) {
          position: absolute;
          top: 3rem;
          left: .7rem;
          width: 94%;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .logo-competi {
    width: 9rem;
    margin-left: 1rem;
  }
`;
