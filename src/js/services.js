import axios from 'axios';
// let axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});
// const api = axios.create({
//     baseURL: 'http://api-desafio-front.justdigital.com.br/'
// });

export default api;