import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommentType } from "@/types/comment";

export const getMemberQuestionComment = async (currentPage: unknown, userUrl?: string) => {
  const { data } = await axiosInstance.get<CommentType>(
    END_POINTS.MEMBER_QUESTION_COMMENT(currentPage, userUrl)
  );

  return data;
};
