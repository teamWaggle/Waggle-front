import type { AxiosError, InternalAxiosRequestConfig } from "axios";

// import { axiosInstance } from "./axiosInstance";
import { HTTPError } from "./HTTPError";
// import { postNewToken } from "./auth/postNewToken";

export interface ErrorResponseData {
	statusCode?: number;
	message?: string;
	code?: number;
}

export const checkToken = (config: InternalAxiosRequestConfig) => {
	if (!config.headers || config.headers.Authorization) {
		return config;
	}

	const accessToken = localStorage.getItem("ACCESS_TOKEN");

	// if (!accessToken) {
	// 	window.location.href = "/";

	// 	throw new Error("토큰이 유효하지 않습니다");
	// }

	config.headers.Authorization = `BEARER ${accessToken}`;

	return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
	const originalRequest = error.config;

	if (!error.response || !originalRequest) {
		throw new Error("에러가 발생했습니다.");
	}

	// const { status } = error.response;

	// if (status === 400) {
	// 	const { accessToken } = await postNewToken();

	// 	originalRequest.headers.Authorization = `Bearer ${accessToken}`;

	// 	localStorage.setItem("ACCESS_TOKEN", accessToken);

	// 	return axiosInstance(originalRequest);
	// }
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
	if (!error.response) {
		throw error;
	}

	const { data, status } = error.response;

	if (status >= 500) {
		throw new HTTPError(500, data.message);
	}

	throw new HTTPError(status, data.message, data.code);
};
