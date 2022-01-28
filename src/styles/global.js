import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {       
        font-size: 93.75%; // 15px       
    }

    body{
        background: #E0D7EC;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
`;

export const PaginationContainer = styled.div`
  .pagination-container {
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;
    list-style-type: none;

    .pagination-item {
      width: 2rem;
      height: 2rem;
      margin: 0 .3rem;
      justify-content: center;
      color: #fff;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      border-radius: 10px;
      font-size: 1rem;
      background: #7E7394;
      border: 2px solid #100b16;

      &.dots:hover {
        background-color: #7E7394;
        cursor: default;
      }
      &:hover {
        background: #535662;
        cursor: pointer;
      }

      &.selected {
        background: #535662;
      }

      .arrow {

        &::before {
          position: relative;
          content: "";
          display: inline-block;
          width: 0.4em;
          height: 0.4em;
          border-right: 0.12em solid #fff;
          border-top: 0.12em solid #fff;
        }

        &.left {
          transform: rotate(-135deg) translate(-50%);
        }

        &.right {
          transform: rotate(45deg);
        }
      }

      &.disabled {
        pointer-events: none;

        .arrow::before {
          border-right: 0.12em solid #fff;
          border-top: 0.12em solid #fff;
        }

        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
    }
  }
`;
