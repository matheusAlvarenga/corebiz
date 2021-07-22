import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0 calc((100% - 21.6rem) / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    transition: all 0.5s;

    &:hover > .desc {
        background-color: ${props => props.theme.greyHover};

        & button {
            display: block;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1.6rem 0;
    transition: all 0.5s;
`;

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 600;

    text-align: center;

    color: ${props => props.theme.grey};
`;

export const StarsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2px;

    margin: 5px 0;
`;

export const Star = styled.img`
    width: 1rem;
    height: 1rem;
`;

export const ListPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;

    color: ${props => props.theme.grey};

    margin-bottom: 2px;
`;

export const Price = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
`;

export const Installments = styled.p`
    font-size: 1.1rem;
    text-align: center;

    color: ${props => props.theme.grey};
`;

export const Button = styled.button`
    display: none;
    margin-top: 8px;
    padding: 8px 2.4rem;

    background-color: ${props => props.theme.black};
    border: 0;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    transition: all 0.5s;

    @media (max-width: 900px) {
        display: block;
    }
`;

export const OFFCard = styled.div`
    width: 8rem;
    height: 7.2rem;

    background-color: ${props => props.theme.red};

    clip-path: polygon(100% 0, 0 0, 100% 100%);

    position: absolute;
    top: 0;
    right: calc((100% - 21.6rem) / 2);

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media (max-width: 900px) {
        right: 0;
    }
`;

export const OFFCardText = styled.p`
    font-size: 1.6rem;
    font-weight: 900;

    color: ${props => props.theme.white};

    margin-right: 8px;
    margin-top: 1.2rem;
`;
