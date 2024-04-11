import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ReplyType } from "@/types/reply";

export const getReply = async (currentPage: number, commentId: number) => {
  const { data } = await axiosInstance.get<ReplyType>(END_POINTS.REPLIES(currentPage, commentId));

  return data;
};
