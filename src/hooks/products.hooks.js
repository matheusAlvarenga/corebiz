/* eslint-disable import/prefer-default-export */
import api from '../utils/api';

export const getProducts = async () => {
    const response = await api.get(
        'https://corebiz-test.herokuapp.com/api/v1/products'
    );

    switch (response.status) {
        case 200:
            return {
                status: 200,
                data: response.data,
            };

        default:
            return {
                status: 999,
                data: 'Ocorreu um erro tente novamente mais tarde.',
            };
    }
};
