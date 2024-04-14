import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getQuestionList } from "@/api/question/getQuestionList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { QuestionListType } from "@/types/question";

export const useQuestionListQuery = () => {
  const {
    data: questionListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<QuestionListType, AxiosError>({
    queryKey: [QUERY_KEYS.QUESTION_LIST],
    queryFn: ({ pageParam: currentPage }) => getQuestionList(currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { questionListData, fetchNextPage, hasNextPage, isFetching };
};
