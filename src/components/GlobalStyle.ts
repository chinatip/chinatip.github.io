import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .MuiTypography-root {
        font-family: 'Quicksand', sans-serif !important;
    }

    .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-body2 {
        font-family: 'Baloo Tammudu 2', cursive !important;
    }

    .MuiTypography-body1 {
        font-weight: 600 !important;
    }
`;

export default GlobalStyle;
