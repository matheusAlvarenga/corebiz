/* eslint-disable react/prop-types */
import React from 'react';

import { Installments } from '../styles/components/product.styled';

const InstallmentsC = ({ data }) => (
    <Installments>
        ou em {data[0].quantity}x de R$
        {data[0].value / 100}
    </Installments>
);

export default InstallmentsC;
