import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getStoryFilter } from "@/api/story/getStoryFilter";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { StoryListType } from "@/types/story";

export const useStoryFilterQuery = (filter: string) => {
  const {
    data: storyListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useSuspenseInfiniteQuery<StoryListType, AxiosError>({
    queryKey: [QUERY_KEYS.STORY_LIST],
    queryFn: ({ pageParam: currentPage }) => getStoryFilter(filter, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { storyListData, fetchNextPage, hasNextPage, isFetching, refetch };
};
