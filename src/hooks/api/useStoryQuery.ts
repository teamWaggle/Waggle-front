import { useQuery } from "@tanstack/react-query";

import type { AxiosError } from "axios";

import { getStory } from "@api/story/getStory";

import type { StoryType } from "@type/story";

export const useStoryQuery = (boardId: number) => {
	const queryFn: { story: () => Promise<StoryType> } = {
		story: () => getStory(boardId),
	};

	const { data } = useQuery<StoryType, AxiosError>(["story"], queryFn.story);

	return { storyData: data! };
};
