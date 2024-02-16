import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SignUpResponseType } from "@/types/auth";

export const getCheckNickname = async (nickname: string) => {
	const { data } = await axiosInstance.get<SignUpResponseType>(END_POINTS.CHECK_NICKNAME(nickname));

	return data;
};
