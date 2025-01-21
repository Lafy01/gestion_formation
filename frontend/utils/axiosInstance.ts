import { useAuthStore } from "@/stores/AuthStore";
import axios from "axios";
import { redirect } from "next/navigation";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window === 'undefined') {
            const { token } = useAuthStore.getState();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error
        if (response && response.status === 401) {
            useAuthStore.getState().logout();
            window.location.href = '/authentification';
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;