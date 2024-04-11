import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteStory = (storyId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.STORY(storyId));
};
