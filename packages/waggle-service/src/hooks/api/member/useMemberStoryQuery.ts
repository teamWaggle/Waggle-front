import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberStory } from "@/api/member/getMemberStory";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { StoryListType } from "@/types/story";

export const useMemberStoryQuery = (memberId: number) => {
  const {
    data: memberStoryData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<StoryListType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_STORY, memberId],
    queryFn: ({ pageParam: currentPage }) => getMemberStory(memberId, currentPage),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { memberStoryData, fetchNextPage, hasNextPage, isFetching };
};
