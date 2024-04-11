import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionType } from "@/types/question";

export const getQuestion = async (questionId: number) => {
  const { data } = await axiosInstance.get<QuestionType>(END_POINTS.QUESTION(questionId));

  return data;
};
