import { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

import type { SignUpResponseType } from "@/types/auth";

export interface test {
	email: string;
}

export const postEmailAuthSend = async ({ email }: test) => {
	// const { data } = await axiosInstance.post(END_POINTS.EMAIL_AUTH_SEND, email);

	const { data } = await axiosInstance.post<test, AxiosResponse<SignUpResponseType>>(
		END_POINTS.EMAIL_AUTH_SEND,
		email,
	);

	return data;
};
