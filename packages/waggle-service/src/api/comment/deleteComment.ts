import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteComment = (commentId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.COMMENT(commentId));
};
