import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface CommentRequestType {
	content: string;
	mentionedMemberList: string[];
	boardId: number;
}

export const postComment = async ({
	content,
	mentionedMemberList,
	boardId,
}: CommentRequestType) => {
	const { data } = await authorizedAxiosInstance.post<
		CommentRequestType,
		AxiosResponse<CommonResponseType>
	>(END_POINTS.POST_COMMENT(boardId), {
		content,
		mentionedMemberList,
	});

	return data;
};
