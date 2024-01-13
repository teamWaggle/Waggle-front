import { axiosInstance } from "@api/axiosInstance";

import { SirenType } from "@type/siren";

import { END_POINTS } from "@constants/api";

export const getSiren = async (boardId: number) => {
	const { data } = await axiosInstance.get<SirenType>(END_POINTS.SIREN(boardId));

	return data;
};
