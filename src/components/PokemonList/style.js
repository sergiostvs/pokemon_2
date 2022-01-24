import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;

    .pokedex-grid{
        display: flex;
        align-items: center;
        margin: auto;
        overflow-x: scroll;

        

        button{
            background: transparent;
            border: 0;
            margin: 0 5rem;
        }
    }

    .poke-pages{
        display: flex;
        flex-direction: column;
        align-items: center;

        .pokemon-row{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin: auto;
            width: 1200px;
        }

        .number-pages{
            padding: .3rem 1rem;
            width: 120px;
            background: #535662;
            border: 2px solid #100B16;
            border-radius: 1rem;
            color: #fff;
            text-align: center;
        }
    }

`