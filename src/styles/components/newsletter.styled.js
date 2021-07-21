import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    padding: 3.2rem calc((100% - 80rem) / 2);

    background-color: ${props => props.theme.greyBackground};

    @media (max-width: 900px) {
        height: auto;

        padding: 2.4rem 1.6rem;
    }
`;

export const Title = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;

    color: ${props => props.theme.greyDark};
`;

export const Form = styled.form`
    width: 100%;
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`;

export const InputCase = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 4.8rem;

    padding: 0 1.6rem;

    background: ${props => props.theme.white};
    border-radius: 5px;
    border: 0;

    color: ${props => props.theme.grey};

    font-family: 'Lato', sans-serif;

    &:focus {
        outline: none;
    }

    &.error {
        border: 1px solid ${props => props.theme.error};
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 14rem;
    height: 4.8rem;

    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    border-radius: 5px;
    border: 0;

    font-family: 'Lato', sans-serif;

    @media (max-width: 900px) {
        max-width: unset;
    }
`;

export const ErrorLabel = styled.p`
    font-size: 1.2rem;

    color: ${props => props.theme.error};
`;

export const MessageTitle = styled.p`
    font-family: 'Lato', sans-serif;

    font-size: 1.6rem;
    font-weight: 700;
`;

export const MessageLine = styled.p`
    font-family: 'Lato', sans-serif;

    font-size: 1.4rem;
    font-weight: 400;

    text-align: center;
`;

export const MessageButton = styled.button`
    font-family: 'Lato', sans-serif;
    font-weight: 700;

    padding: 1.6rem 5.4rem;
    border-radius: 5px;
    border: 0;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
`;
