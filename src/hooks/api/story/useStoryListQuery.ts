import type { AxiosError } from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getStoryList } from "@/api/story/getStoryList";

import type { StoryListType } from "@/types/story";

export const useStoryListQuery = () => {
	const {
		data: storyListData,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = useInfiniteQuery<StoryListType, AxiosError>({
		queryKey: ["storyList"],
		queryFn: ({ pageParam: currentPage }) => getStoryList(currentPage),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
		},
	});

	return { storyListData, fetchNextPage, hasNextPage, isFetching };
};
