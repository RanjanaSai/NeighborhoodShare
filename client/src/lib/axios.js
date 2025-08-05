import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://neighborhood-share-hn7j.vercel.app/api",
    timeout: 10000,

    headers: {
        'content-type': 'application/json'
    }

})
export default apiClient;

//creation of axios instance
