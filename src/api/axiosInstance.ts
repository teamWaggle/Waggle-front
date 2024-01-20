import axios from "axios";

import { checkToken, handleAPIError, handleTokenError } from "./interceptors";

export const axiosInstance = axios.create({
	baseURL: "https://suddii01.store/",
	timeout: 3000,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(checkToken, handleAPIError);

axiosInstance.interceptors.response.use((response) => response, handleTokenError);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
