import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getStoryList } from "@/api/story/getStoryList";

import type { StoryListType } from "@/types/story";

export const useStoryListQuery = (currentPage: number) => {
	const { data: storyListData } = useQuery<StoryListType, AxiosError>({
		queryKey: ["storyList"],
		queryFn: () => getStoryList(currentPage),
	});

	return { storyListData };
};

export const useStoryListTestQuery = (currentPage: number) => {
	const {
		data: storyListData,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery<StoryListType>({
		queryKey: ["storyList"],
		queryFn: () => getStoryList(currentPage),
		initialPageParam: 0,
		// 결과값 안에 다음 페이지 호출 필드가 필요함
		getNextPageParam: (currentPage) => {
			return currentPage.result.isLast;
		},
	});

	return { storyListData, fetchNextPage, hasNextPage };
};
