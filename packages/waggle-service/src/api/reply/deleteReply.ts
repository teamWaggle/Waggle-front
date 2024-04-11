import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const deleteReply = (replyId: number) => {
  return authorizedAxiosInstance.delete(END_POINTS.REPLY(replyId));
};
