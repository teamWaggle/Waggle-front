import type { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import type { TokenType, UserType } from "@/types/auth";

export const postLogIn = async ({ username, password }: UserType) => {
	const { data } = await axiosInstance.post<UserType, AxiosResponse<TokenType>>("/api/tokens", {
		username,
		password,
	});

	return data;
};
