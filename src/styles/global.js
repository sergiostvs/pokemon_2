import { createGlobalStyle } from 'styled-components';

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
`