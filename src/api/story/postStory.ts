import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export interface StoryFormType {
	content: string;
	hashtagList: string[];
	mediaList: string[];
}

export const postStory = async (formData: FormData) => {
	const config = {
		headers: { "Content-Type": "multipart/form-data" },
	};

	return authorizedAxiosInstance.post<StoryFormType>(END_POINTS.UPLOAD_STORY, formData, config);
};
