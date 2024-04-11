import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";
import type { PostReplyType } from "@/types/reply";

export const postReply = async ({ content, mentionedMemberList, commentId }: PostReplyType) => {
  const { data } = await authorizedAxiosInstance.post<
    PostReplyType,
    AxiosResponse<CommonResponseType>
  >(END_POINTS.POST_REPLY(commentId), {
    content,
    mentionedMemberList,
  });

  return data;
};
