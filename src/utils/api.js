import axios from 'axios';

import { url } from './vars';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    },
});

export default api;
