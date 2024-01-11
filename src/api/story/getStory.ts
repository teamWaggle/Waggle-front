import { axiosInstance } from "@api/axiosInstance";

import type { StoryType } from "@type/story";

import { END_POINTS } from "@constants/api";

export const getStory = async (boardId: number) => {
	const { data } = await axiosInstance.get<StoryType>(END_POINTS.STORY(boardId));

	return data;
};
