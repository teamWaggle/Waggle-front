import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { BoardType, CommentType } from "@/types/comment";

export const getComment = async (currentPage: unknown, boardId: number, boardType: BoardType) => {
  const { data } = await axiosInstance.get<CommentType>(
    END_POINTS.COMMENTS(currentPage, boardId, boardType)
  );

  return data;
};
