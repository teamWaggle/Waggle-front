import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getComment } from "@/api/comment/getComment";

import type { CommentType } from "@/types/comment";

export const useCommentQuery = (currentPage: number, boardId: number) => {
	const queryFn: { comment: () => Promise<CommentType> } = {
		comment: () => getComment(currentPage, boardId),
	};

	const { data } = useQuery<CommentType, AxiosError>(["comment"], queryFn.comment);

	return { commentData: data! };
};
