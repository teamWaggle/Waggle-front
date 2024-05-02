import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommentType } from "@/types/comment";

export const getMemberSirenComment = async (currentPage: unknown, userUrl?: string) => {
  const { data } = await axiosInstance.get<CommentType>(
    END_POINTS.MEMBER_SIREN_COMMENT(currentPage, userUrl)
  );

  return data;
};
