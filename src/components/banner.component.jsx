import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Container,
    Slide,
    SubTitle,
    Title,
} from '../styles/components/banner.styled';

import background from '../assets/banner.jpg';

const Banner = () => (
    <Container>
        <Slider dots>
            <div>
                <Slide style={{ backgroundImage: `url(${background})` }}>
                    <SubTitle>Olá, o que você está buscando?</SubTitle>
                    <Title>
                        Criar ou migrar seu
                        <br />
                        e-commerce?
                    </Title>
                </Slide>
            </div>
            <div>
                <Slide style={{ backgroundImage: `url(${background})` }}>
                    <SubTitle>Olá, o que você está buscando?</SubTitle>
                    <Title>
                        Criar ou migrar seu
                        <br />
                        e-commerce?
                    </Title>
                </Slide>
            </div>
        </Slider>
    </Container>
);

export default Banner;
