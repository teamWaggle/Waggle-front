import { axiosInstance } from "@api/axiosInstance";

import type { SirenListType } from "@type/siren";

import { END_POINTS } from "@constants/api";

export const getSirenList = async (currentPage: number) => {
	const { data } = await axiosInstance.get<SirenListType>(END_POINTS.SIREN_LIST(currentPage));

	return data;
};
