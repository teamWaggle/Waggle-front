import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getComment } from "@/api/comment/getComment";

import type { CommentType } from "@/types/comment";

export const useCommentQuery = (currentPage: number, boardId: number) => {
	const { data: commentData } = useQuery<CommentType, AxiosError>({
		queryKey: ["comment"],
		queryFn: () => getComment(currentPage, boardId),
	});

	return { commentData };
};
