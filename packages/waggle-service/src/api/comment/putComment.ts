import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommentApiRequestType, EditCommentPropsType } from "@/types/comment";
import type { CommonResponseType } from "@/types/common";

export const putComment = async ({ content, commentId }: EditCommentPropsType) => {
  return authorizedAxiosInstance.put<CommentApiRequestType, AxiosResponse<CommonResponseType>>(
    END_POINTS.COMMENT(commentId),
    {
      content,
    }
  );
};
