import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getComment } from "@/api/comment/getComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useCommentQuery = (boardId: number) => {
  const {
    data: commentData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMENT, boardId],
    queryFn: ({ pageParam: currentPage }) => getComment(currentPage, boardId),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { commentData, fetchNextPage, hasNextPage, isFetching };
};
