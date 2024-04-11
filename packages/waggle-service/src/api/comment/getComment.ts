import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommentType } from "@/types/comment";

export const getComment = async (currentPage: number, boardId: number) => {
  const { data } = await axiosInstance.get<CommentType>(END_POINTS.COMMENTS(currentPage, boardId));

  return data;
};
