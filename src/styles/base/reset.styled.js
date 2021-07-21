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
    }
    button {
        cursor: pointer;
    }

    .slick-dots {
        bottom: 2.4rem;

        & > li > button::before {
            font-size: 1rem;
            color: ${props => props.theme.white};
            opacity: 0.75;
        }

        & > li.slick-active > button::before {
            color: ${props => props.theme.red};
        }
    }
`;

export default ResetCss;
