import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberQuestionComment } from "@/api/member/getMemberQuestionComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useMemberQuestionCommentQuery = (userUrl?: string) => {
  const {
    data: memberCommentData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_QUESTION_COMMENT, userUrl],
    queryFn: ({ pageParam: currentPage }) => getMemberQuestionComment(currentPage, userUrl),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberCommentData, fetchNextPage, hasNextPage, isFetching };
};
