import { axiosInstance } from "@api/axiosInstance";

import type { StoryListType } from "@type/story";

import { END_POINTS } from "@constants/api";

export const getStoryList = async (currentPage: number) => {
	const { data } = await axiosInstance.get<StoryListType>(END_POINTS.STORY_LIST(currentPage));

	return data;
};
