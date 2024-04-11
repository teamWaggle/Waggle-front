import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { StoryListType } from "@/types/story";

export const getStoryList = async (currentPage: unknown) => {
  const { data } = await axiosInstance.get<StoryListType>(END_POINTS.STORY_LIST(currentPage));

  return data;
};
