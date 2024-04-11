import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getStoryList } from "@/api/story/getStoryList";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { StoryListType } from "@/types/story";

export const useStoryListQuery = () => {
  const {
    data: storyListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<StoryListType, AxiosError>({
    queryKey: [QUERY_KEYS.STORY_LIST],
    queryFn: ({ pageParam: currentPage }) => getStoryList(currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { storyListData, fetchNextPage, hasNextPage, isFetching };
};
