import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

import type { SirenType } from "@/types/siren";

export const getSiren = async (boardId: number) => {
	const { data } = await axiosInstance.get<SirenType>(END_POINTS.SIREN(boardId));

	return data;
};
