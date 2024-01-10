import { axiosInstance } from "@api/axiosInstance";

import type { CommentType } from "@type/comment";

import { END_POINTS } from "@/constants/api";

export const getComment = async (currentPage: number, boardId: number) => {
	const { data } = await axiosInstance.get<CommentType>(END_POINTS.COMMENT(currentPage, boardId));

	return data;
};
