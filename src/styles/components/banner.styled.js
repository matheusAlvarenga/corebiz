import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Slide = styled.div`
    width: 100%;
    height: 43rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    padding: 0 calc((100% - 130rem) / 2);

    color: ${props => props.theme.white};

    @media (max-width: 900px) {
        background-position: 75%;
        filter: brightness(0.75);
    }
`;

export const SubTitle = styled.p`
    width: 45%;

    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;

    margin-bottom: 1.6rem;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Title = styled.p`
    width: 45%;

    font-size: 4.5rem;
    font-weight: 900;
    line-height: 4.5rem;

    @media (max-width: 900px) {
        width: 100%;
    }
`;
