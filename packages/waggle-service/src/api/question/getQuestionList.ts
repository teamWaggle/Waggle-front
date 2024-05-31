import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionListType } from "@/types/question";

export const getQuestionList = async (keyword: string, sortParam: string, currentPage: unknown) => {
  const { data } = await axiosInstance.get<QuestionListType>(
    END_POINTS.QUESTION_LIST(keyword, sortParam, currentPage)
  );

  return data;
};
