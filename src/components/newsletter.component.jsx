import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Title,
} from '../styles/components/newsletter.styled';

const Newsletter = () => (
    <Container>
        <Title>Participe de nossas news com promoções e novidades!</Title>
        <Form>
            <FormGroup>
                <Input placeholder="Digite seu nome" />
                <Input placeholder="Digite seu email" />
                <Button>Eu quero!</Button>
            </FormGroup>
        </Form>
    </Container>
);

export default Newsletter;
