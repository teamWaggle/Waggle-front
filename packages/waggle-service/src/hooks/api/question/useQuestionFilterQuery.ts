import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getQuestionFilter } from "@/api/question/getQuestionFilter";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { QuestionListType } from "@/types/question";

export const useQuestionFilterQuery = (filter: string) => {
  const {
    data: questionListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<QuestionListType, AxiosError>({
    queryKey: [QUERY_KEYS.QUESTION_FILTER],
    queryFn: ({ pageParam: currentPage }) => getQuestionFilter(filter, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { questionListData, fetchNextPage, hasNextPage, isFetching };
};
