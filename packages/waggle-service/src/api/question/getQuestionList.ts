import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionListType } from "@/types/question";

export const getQuestionList = async (currentPage: number) => {
  const { data } = await axiosInstance.get<QuestionListType>(END_POINTS.QUESTIONS(currentPage));

  return data;
};
