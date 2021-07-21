/* eslint-disable import/prefer-default-export */
import api from '../utils/api';

export const sendNews = async data => {
    const response = await api.post(
        'https://corebiz-test.herokuapp.com/api/v1/newsletter',
        data
    );

    switch (response.status) {
        case 200:
            return {
                title: 'Seu e-mail foi cadastrado com sucesso!',
                text: 'A partir de agora você receberá as novidade e ofertas exclusivas.',
                button: 'Cadastrar novo e-mail',
            };

        default:
            return {
                title: 'Não foi possivel enviar sua solicitação!',
                text: '',
                button: 'Tentar novamente',
            };
    }
};
