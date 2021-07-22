/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
    Button,
    Container,
    Description,
    Image,
    ListPrice,
    Price,
    Title,
} from '../styles/components/product.styled';
import Installments from './installments.component';
import Stars from './stars.component';

const Product = ({ data }) => (
    <Container>
        <Image />
        <Description>
            <Title>{data.productName}</Title>
            <Stars count={data.stars} />
            {data.listPrice !== null && (
                <ListPrice>de R${(data.listPrice / 100).toFixed(2)}</ListPrice>
            )}
            <Price>por R${(data.price / 100).toFixed(2)}</Price>
            {data.installments.length !== 0 && (
                <Installments data={data.installments} />
            )}
            <Button>Comprar</Button>
        </Description>
    </Container>
);

export default Product;
