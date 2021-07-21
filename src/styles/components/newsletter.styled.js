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
`;

export const InputCase = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;
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
`;

export const ErrorLabel = styled.p`
    font-size: 1.2rem;

    color: ${props => props.theme.error};
`;
