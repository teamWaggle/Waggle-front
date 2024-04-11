import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { QuestionRepresentativeType } from "@/types/question";

export const getRepresentativeQuestion = async () => {
  const { data } = await axiosInstance.get<QuestionRepresentativeType>(
    END_POINTS.QUESTION_REPRESENTATIVE
  );

  return data;
};
