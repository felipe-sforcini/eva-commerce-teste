import axios from 'axios';

const url = "https://www.eva-test-api.plataformaeva.com/";

const api = axios.create({
    baseURL: url,
});

export default api;