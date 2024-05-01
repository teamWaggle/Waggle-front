import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionListType } from "@/types/question";

export const getQuestionFilter = async (filter: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<QuestionListType>(
    END_POINTS.QUESTION_FILTER(filter, currentPage)
  );

  return data;
};
