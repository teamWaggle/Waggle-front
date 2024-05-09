import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommentApiRequestType, CommentPropsType } from "@/types/comment";
import type { CommonResponseType } from "@/types/common";

export const postComment = async ({ content, boardId }: CommentPropsType) => {
  const { data } = await authorizedAxiosInstance.post<
    CommentApiRequestType,
    AxiosResponse<CommonResponseType>
  >(END_POINTS.POST_COMMENT(boardId), {
    content,
  });

  return data;
};
