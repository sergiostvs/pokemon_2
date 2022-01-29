import styled from "styled-components";

export const Container = styled.div`
    background: #D4C3A3;
    max-width: 1000px;  
    margin: auto;
    padding-bottom: 2rem;
    min-height: 300px;
    border-radius: 0 0 1.6rem 1.6rem;

    .filter{
        padding: 1rem;
        border-bottom: 1px solid #707070;

        .filter-box{
            width: 8rem;
            padding: .3rem;
            border-radius: .2rem;
        }
    }

    .filtered{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
`