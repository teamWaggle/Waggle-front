import axios from "axios";

import { checkToken, handleAPIError, handleTokenError } from "@/api/interceptors";

import { BASE_URL } from "@/constants/api";

// 미인증 axios
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

// 인증 axios
export const authorizedAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

authorizedAxiosInstance.interceptors.request.use(checkToken, handleAPIError);

authorizedAxiosInstance.interceptors.response.use((response) => response, handleTokenError);

authorizedAxiosInstance.interceptors.response.use((response) => response, handleAPIError);
