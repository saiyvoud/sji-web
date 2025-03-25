import axios from "axios";
import { useAuthStore } from "../store/authStore";

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API_USER,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Add a request interceptor to dynamically set the Authorization header
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore.getState(); // Get the current state of the auth store
    const token = authStore?.AuthDetail?.data?.token; // Get the token from the store

    // If a token exists, set the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
