import styled from "styled-components";

export const Container = styled.div`
    background: #D4C3A3;
    max-width: 1000px;  
    margin: auto;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    min-height: 300px;
    border-radius: 0 0 1.6rem 1.6rem;

    .filter{
        padding: 1rem;

        .filter-box{
            width: 8rem;
            padding: .3rem;
            border-radius: .2rem;
        }
    }

    .loading{
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .loading-text{
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    .search-results{
        border-bottom: 1px solid #707070;
        margin-bottom: 1rem;

        .resultado{
            padding: 1rem;
            font-weight: 500;
            font-size: 1.2rem;
        }
    }

    .filtered{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
`