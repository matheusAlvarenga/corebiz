import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    padding: 2.4rem calc((100% - 130rem) / 2);

    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.black};
`;

export const Divider = styled.div`
    width: 6.5rem;

    border: 3px solid ${props => props.theme.greyBottom};

    margin-bottom: 1.6rem;

    @media (max-width: 900px) {
        width: 4rem;
    }
`;
