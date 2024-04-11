import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getStory } from "@/api/story/getStory";

import type { StoryType } from "@/types/story";

export const useStoryQuery = (boardId: number) => {
	const { data: storyData } = useSuspenseQuery<StoryType, AxiosError>({
		queryKey: ["story", boardId],
		queryFn: () => getStory(boardId),
	});

	return { storyData };
};
