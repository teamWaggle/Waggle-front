import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteQuestion = (questionId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.QUESTION(questionId));
};
