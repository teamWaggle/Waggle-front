import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";

interface EditQuestionRequestType {
  questionId: number;
  formData: FormData;
}

export const putQuestion = async ({ questionId, formData }: EditQuestionRequestType) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return await authorizedAxiosInstance.put<
    EditQuestionRequestType,
    AxiosResponse<CommonResponseType>
  >(END_POINTS.QUESTION(questionId), formData, config);
};
