import { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

export const postEmailAuthSend = (email: string) => {
	return axiosInstance.post<AxiosResponse<CommonResponseType>>(END_POINTS.EMAIL_AUTH_SEND, email);
};
