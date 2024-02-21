import { AxiosResponse } from "axios";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { FindEmailResponseType } from "@/types/auth";

export const getFindEmail = async ({ name, birthday }: { name: string; birthday: string }) => {
	const { data } = await axiosInstance.get<AxiosResponse<FindEmailResponseType>>(
		END_POINTS.FIND_EMAIL(name, birthday),
	);

	return data;
};
