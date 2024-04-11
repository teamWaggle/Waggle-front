import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface EditStoryRequestType {
  storyId: number;
  formData: FormData;
}

export const putStory = async ({ storyId, formData }: EditStoryRequestType) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return await authorizedAxiosInstance.put<EditStoryRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.STORY(storyId),
    formData,
    config
  );
};
