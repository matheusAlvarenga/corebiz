import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    padding: 2.4rem calc((100% - 130rem) / 2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.black};

    color: ${props => props.theme.white};
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LocationTitle = styled.p`
    font-size: 2rem;
    font-weight: 700;

    margin-bottom: 1.6rem;
`;

export const LocationDivider = styled.div`
    width: 40%;

    border: 3px solid ${props => props.theme.white};

    margin-bottom: 1.6rem;
`;

export const LocationLine = styled.p`
    font-size: 1.3rem;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactCard = styled.div`
    width: 20rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    padding: 1.6rem;

    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    border-radius: 5px;

    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 2.4rem;
    }
`;

export const ContactIcon = styled.img`
    fill: ${props => props.theme.black};
`;

export const ContactLabel = styled.p`
    font-size: 1.2rem;
    font-weight: 600;

    max-width: 13rem;
`;

export const Authors = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AuthorLabel = styled.p``;

export const AuthorImg = styled.img``;

export const GreyLine = styled.div`
    width: 100%;
    height: 1rem;

    background-color: ${props => props.theme.greyBottom};
`;
