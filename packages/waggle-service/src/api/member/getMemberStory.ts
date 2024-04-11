import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { StoryListType } from "@/types/story";

export const getMemberStory = async (memberId: number, currentPage: unknown) => {
  const { data } = await axiosInstance.get<StoryListType>(
    END_POINTS.MEMBER_STORY(memberId, currentPage)
  );

  return data;
};
