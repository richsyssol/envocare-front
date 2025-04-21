import axios from "axios";

// Use the correct environment variable with the `VITE_` prefix
const API_BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;
const IMAGE_PATH = import.meta.env.VITE_PUBLIC_IMAGE_PATH;

console.log("API Base URL:", API_BASE_URL);
console.log("Image Path:", IMAGE_PATH);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;
