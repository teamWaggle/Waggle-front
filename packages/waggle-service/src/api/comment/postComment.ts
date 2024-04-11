import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { PostCommentType } from "@/types/comment";
import type { CommonResponseType } from "@/types/common";

export const postComment = async ({ content, mentionedMemberList, boardId }: PostCommentType) => {
  const { data } = await authorizedAxiosInstance.post<
    PostCommentType,
    AxiosResponse<CommonResponseType>
  >(END_POINTS.POST_COMMENT(boardId), {
    content,
    mentionedMemberList,
  });

  return data;
};
