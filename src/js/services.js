import axios from 'axios';
// let axios = require('axios');

// Ajax request to my fake api with json server
const api = axios.create({
    baseURL: 'http://localhost:3000/products'
});

// Ajax request with original API, but it doesn't allow patch method
// const api = axios.create({
//     baseURL: 'http://api-desafio-front.justdigital.com.br/'
// });

export default api;