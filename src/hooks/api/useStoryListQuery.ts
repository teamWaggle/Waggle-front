import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getStoryList } from "@/api/story/getStoryList";

import type { StoryListType } from "@/types/story";

export const useStoryListQuery = (currentPage: number) => {
	const queryFn: { storyList: () => Promise<StoryListType> } = {
		storyList: () => getStoryList(currentPage),
	};

	const { data } = useQuery<StoryListType, AxiosError>(["storyList"], queryFn.storyList);

	return { storyList: data! };
};
