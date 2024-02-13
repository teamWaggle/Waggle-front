import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

import type { TokenType } from "@/types/auth";

export const postNewToken = async () => {
	const { data } = await axiosInstance.post<TokenType>(END_POINTS.TOKEN);

	return data;
};
