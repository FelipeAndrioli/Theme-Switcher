import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        font-size: 14px;
        color: ${({ theme }) => theme.text};
        font-family: sans-serif;
    }
`