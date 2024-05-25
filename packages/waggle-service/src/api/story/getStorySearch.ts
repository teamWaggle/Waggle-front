import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { StoryListType } from "@/types/story";

export const getStorySearch = async (keyword: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<StoryListType>(
    END_POINTS.STORY_SEARCH(keyword, currentPage)
  );

  return data;
};
