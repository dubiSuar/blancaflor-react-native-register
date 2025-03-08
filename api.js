import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/auth/login',
});

export default api;