import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getStorySearch } from "@/api/story/getStorySearch";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { StoryListType } from "@/types/story";

export const useStorySearchQuery = (keyword: string) => {
  const {
    data: storySearchData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<StoryListType, AxiosError>({
    queryKey: [QUERY_KEYS.STORY_SEARCH],
    queryFn: ({ pageParam: currentPage }) => getStorySearch(keyword, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { storySearchData, fetchNextPage, hasNextPage, isFetching };
};
