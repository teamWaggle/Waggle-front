import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { StoryType } from "@/types/story";

export const getStory = async (boardId: number) => {
	const { data } = await axiosInstance.get<StoryType>(END_POINTS.STORY(boardId));

	return data;
};
