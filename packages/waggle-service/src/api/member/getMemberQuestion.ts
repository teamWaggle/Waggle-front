import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionListType } from "@/types/question";

export const getMebmerQuestion = async (currentPage: unknown, userUrl?: string) => {
  const { data } = await axiosInstance.get<QuestionListType>(
    END_POINTS.MEMBER_QUESTION(currentPage, userUrl)
  );

  return data;
};
