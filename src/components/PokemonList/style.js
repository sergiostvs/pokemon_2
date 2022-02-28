import styled from "styled-components";

export const Container = styled.div`
  margin: auto 2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .box-list{
    min-height: 320px;

    .loading{
      margin: auto;
      display: flex;
      flex-direction: column;

      .loading-text{
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  
    .pokedex-grid {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }


  .pagination {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: #7e7394;
      border: 2px solid #100b16;
      border-radius: 50%;
      color: #fff;
      height: 30px;
      width: 30px;
      margin: 0 0.4rem;
    }

    .pagination__item--active {
      background: #535662;
      height: 35px;
      width: 35px;
    }

    .next {
      background: transparent;
      border: 0;
      position: relative;
      bottom: 13rem;
      left: -30rem;

      @media(max-width: 1348px){
        display: none;
      }
    }

    .back {
      background: transparent;
      border: 0;
      position: relative;
      bottom: 13rem;
      left: 30rem;

      @media(max-width: 1348px){
        display: none;
      }
    }
  }
`;
