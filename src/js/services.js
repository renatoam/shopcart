import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api-desafio-front.justdigital.com.br/'
});

export default api;