import axios from 'axios';
// const axios = require('axios');

const api = axios.create({
    baseURL: 'http://api-desafio-front.justdigital.com.br/'
});

export default api;
// module.exports = api;