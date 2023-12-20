import type { AxiosResponse } from "axios";

import { axiosInstance } from "@api/axiosInstance";

import type { TokenType, UserType } from "@type/auth";

// interface PostLogInRequestBody {
// 	code: string;
// }

// interface PostLogInParams extends PostLogInRequestBody {
// 	provider: string;
// }

export const postLogIn = async ({ username, password }: UserType) => {
	const { data } = await axiosInstance.post<UserType, AxiosResponse<TokenType>>("/api/tokens", {
		username,
		password,
	});

	console.log(data);

	return data;
};
