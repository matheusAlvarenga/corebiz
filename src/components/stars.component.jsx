/* eslint-disable react/prop-types */
import React from 'react';
import { Star, StarsContainer } from '../styles/components/product.styled';

import star from '../assets/star.svg';
import starBorder from '../assets/star_border.svg';

const Stars = ({ count }) => {
    const arr = Array.from(Array(5).keys());

    return (
        <StarsContainer>
            {arr.map(data => {
                if (data < count) {
                    return <Star src={star} />;
                }
                return <Star src={starBorder} />;
            })}
        </StarsContainer>
    );
};

export default Stars;
