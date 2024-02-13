import axios from "axios";

import { BASE_URL } from "@/constants/api";

import { checkToken, handleAPIError, handleTokenError } from "./interceptors";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(checkToken, handleAPIError);

axiosInstance.interceptors.response.use((response) => response, handleTokenError);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
