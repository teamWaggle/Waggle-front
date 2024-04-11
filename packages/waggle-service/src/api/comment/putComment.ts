import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { PutCommentType } from "@/types/comment";
import type { CommonResponseType } from "@/types/common";

export const putComment = async ({ content, mentionedMemberList, commentId }: PutCommentType) => {
  return authorizedAxiosInstance.put<PutCommentType, AxiosResponse<CommonResponseType>>(
    END_POINTS.COMMENT(commentId),
    {
      content,
      mentionedMemberList,
    }
  );
};
