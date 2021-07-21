import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    InputCase,
    Input,
    Title,
    ErrorLabel,
} from '../styles/components/newsletter.styled';

const Newsletter = () => (
    <Container>
        <Title>Participe de nossas news com promoções e novidades!</Title>
        <Form>
            <FormGroup>
                <InputCase>
                    <Input className="error" placeholder="Digite seu nome" />
                    <ErrorLabel>Preencha com seu nome completo</ErrorLabel>
                </InputCase>
                <InputCase>
                    <Input placeholder="Digite seu email" />
                </InputCase>
                <Button>Eu quero!</Button>
            </FormGroup>
        </Form>
    </Container>
);

export default Newsletter;
