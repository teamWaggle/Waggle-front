import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

import type { TokenType } from "@/types/auth";

export const postRefreshToken = async () => {
	const { data } = await authorizedAxiosInstance.post<TokenType>(END_POINTS.TOKEN);

	return data;
};
