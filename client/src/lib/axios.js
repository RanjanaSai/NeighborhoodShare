import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 10000,

    headers: {
        'content-type': 'application/json'
    }

})
export default apiClient;

//creation of axios instance