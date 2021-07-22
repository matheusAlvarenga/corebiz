/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import {
    Container,
    Divider,
    Title,
} from '../styles/components/productList.styled';
import Product from './product.component';

const ProductList = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <Container>
            <Title>Mais Vendidos</Title>
            <Divider />
            <Slider {...settings}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </Container>
    );
};

export default ProductList;
