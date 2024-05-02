import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberSirenComment } from "@/api/member/getMemberSirenComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useMemberSirenCommentQuery = (userUrl?: string) => {
  const {
    data: memberCommentData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_SIREN_COMMENT, userUrl],
    queryFn: ({ pageParam: currentPage }) => getMemberSirenComment(currentPage, userUrl),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberCommentData, fetchNextPage, hasNextPage, isFetching };
};
