import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const AxiosClient = axios.create({
    baseURL: `http://127.0.0.1:8000`,
});

AxiosClient.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('Admin_TOKEN');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    (res: AxiosResponse) => {
        console.log(res);
        return res;
    },
    (error: AxiosError) => {
        console.log(error);
        const { response } = error;
        if (response && response.status === 402) {
            return Promise.resolve([]); // Returning empty array for 402 error
        }
        if (response && response.status === 401) {
            // Handle 401 Unauthorized, e.g., clear token from localStorage
            localStorage.removeItem('Admin_TOKEN');
        } else {
            console.log(response);
        }
        return Promise.reject(error);
    }
);

export default AxiosClient;
