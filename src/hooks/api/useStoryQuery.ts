import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getStory } from "@/api/story/getStory";

import type { StoryType } from "@/types/story";

export const useStoryQuery = (boardId: number) => {
	const queryFn: { story: () => Promise<StoryType> } = {
		story: () => getStory(boardId),
	};

	const { data } = useQuery<StoryType, AxiosError>(["story"], queryFn.story);

	return { storyData: data! };
};
