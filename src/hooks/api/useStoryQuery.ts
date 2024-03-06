import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getStory } from "@/api/story/getStory";

import type { StoryType } from "@/types/story";

export const useStoryQuery = (boardId: number) => {
	const { data: storyData } = useQuery<StoryType, AxiosError>({
		queryKey: ["story"],
		queryFn: () => getStory(boardId),
	});

	return { storyData };
};
