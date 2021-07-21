/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendNews } from '../hooks/newsletter.hooks';

import {
    Button,
    Container,
    Form,
    FormGroup,
    InputCase,
    Input,
    Title,
    ErrorLabel,
    MessageButton,
    MessageLine,
    MessageTitle,
} from '../styles/components/newsletter.styled';

const Newsletter = () => {
    const [state, setState] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onSubmit = async data => {
        const response = await sendNews(data);

        setValue('name', '');
        setValue('email', '');

        setState(response);
    };

    return (
        <Container>
            {state === 0 ? (
                <>
                    <Title>
                        Participe de nossas news com promoções e novidades!
                    </Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <InputCase>
                                <Input
                                    className={errors.name && 'error'}
                                    placeholder="Digite seu nome"
                                    {...register('name', { required: true })}
                                />
                                {errors.name && (
                                    <ErrorLabel>
                                        Preencha com seu nome completo
                                    </ErrorLabel>
                                )}
                            </InputCase>
                            <InputCase>
                                <Input
                                    className={errors.email && 'error'}
                                    placeholder="Digite seu email"
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <ErrorLabel>
                                        Preencha com um e-mail válido
                                    </ErrorLabel>
                                )}
                            </InputCase>
                            <Button>Eu quero!</Button>
                        </FormGroup>
                    </Form>
                </>
            ) : (
                <>
                    <MessageLine>
                        <MessageTitle>{state.title}</MessageTitle>
                        {state.text}
                    </MessageLine>
                    <MessageButton onClick={() => setState(0)}>
                        {state.button}
                    </MessageButton>
                </>
            )}
        </Container>
    );
};

export default Newsletter;
