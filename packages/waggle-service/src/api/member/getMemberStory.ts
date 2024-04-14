import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { StoryListType } from "@/types/story";

export const getMemberStory = async (currentPage: unknown, userUrl?: string) => {
  const { data } = await axiosInstance.get<StoryListType>(
    END_POINTS.MEMBER_STORY(currentPage, userUrl)
  );

  return data;
};
