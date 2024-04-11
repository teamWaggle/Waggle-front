import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getStory } from "@/api/story/getStory";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { StoryType } from "@/types/story";

export const useStoryQuery = (boardId: number) => {
  const { data: storyData } = useSuspenseQuery<StoryType, AxiosError>({
    queryKey: [QUERY_KEYS.STORY, boardId],
    queryFn: () => getStory(boardId),
  });

  return { storyData };
};
