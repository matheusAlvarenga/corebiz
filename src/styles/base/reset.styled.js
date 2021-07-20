import { createGlobalStyle } from 'styled-components';

const ResetCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    html {
        font-size: 62.5%;

        background-color: aqua;
    }
    button {
        cursor: pointer;
    }
    .react-kanban-column {
        padding: 0;
    }
`;

export default ResetCss;
