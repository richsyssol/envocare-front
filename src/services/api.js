import axios from "axios";

// Use the correct environment variable with the `VITE_` prefix
const API_BASE_URL = "https://envocare.demovoting.com/api";
const IMAGE_PATH = "https://envocare.demovoting.com/api/storage/public/app";

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
