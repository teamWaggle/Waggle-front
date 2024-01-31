import { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

import type { SignUpResponseType } from "@/types/auth";

export const postEmailAuthSend = (email: string) => {
	return axiosInstance.post<AxiosResponse<SignUpResponseType>>(END_POINTS.EMAIL_AUTH_SEND, email);
};
