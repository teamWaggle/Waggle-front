import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getStoryList } from "@/api/story/getStoryList";

import type { StoryListType } from "@/types/story";

export const useStoryListQuery = (currentPage: number) => {
	const { data: storyListData } = useQuery<StoryListType, AxiosError>({
		queryKey: ["storyList"],
		queryFn: () => getStoryList(currentPage),
	});

	return { storyListData };
};
