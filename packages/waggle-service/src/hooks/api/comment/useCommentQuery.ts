import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getComment } from "@/api/comment/getComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { BoardType, CommentType } from "@/types/comment";

export const useCommentQuery = (boardId: number, boardType: BoardType) => {
  const {
    data: commentData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMENT, boardId],
    queryFn: ({ pageParam: currentPage }) => getComment(currentPage, boardId, boardType),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { commentData, fetchNextPage, hasNextPage, isFetching };
};
