import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMebmerQuestion } from "@/api/member/getMemberQuestion";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { QuestionListType } from "@/types/question";

export const useMemberQuestionQuery = (userUrl?: string) => {
  const {
    data: memberQuestionData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<QuestionListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_QUESTION, userUrl],
    queryFn: ({ pageParam: currentPage }) => getMebmerQuestion(currentPage, userUrl),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberQuestionData, fetchNextPage, hasNextPage, isFetching };
};
