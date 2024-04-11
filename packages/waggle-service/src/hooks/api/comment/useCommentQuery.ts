import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getComment } from "@/api/comment/getComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useCommentQuery = (currentPage: number, boardId: number) => {
  console.log(boardId);
  const { data: commentData } = useQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMENT, boardId],
    queryFn: () => getComment(currentPage, boardId),
  });

  return { commentData };
};
