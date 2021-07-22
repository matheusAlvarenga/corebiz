/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getProducts } from '../hooks/products.hooks';
import {
    Container,
    Divider,
    Title,
} from '../styles/components/productList.styled';
import Product from './product.component';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(undefined);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
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
                    arrows: false,
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

    useEffect(async () => {
        const response = await getProducts();

        switch (response.status) {
            case 200:
                setProducts(response.data);
                break;

            default:
                setError(response.data);
        }
    }, []);

    if (!products) {
        return <h1>Carregando</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <Container>
            <Title>Mais Vendidos</Title>
            <Divider />
            <Slider {...settings}>
                {products.map(product => (
                    <Product data={product} />
                ))}
            </Slider>
        </Container>
    );
};

export default ProductList;
