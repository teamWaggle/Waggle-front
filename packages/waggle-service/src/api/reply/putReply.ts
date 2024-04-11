import type { AxiosResponse } from "axios";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CommonResponseType } from "@/types/common";
import type { PutReplyType } from "@/types/reply";

export const putReply = async ({ content, mentionedMemberList, replyId }: PutReplyType) => {
  return authorizedAxiosInstance.put<PutReplyType, AxiosResponse<CommonResponseType>>(
    END_POINTS.REPLY(replyId),
    {
      content,
      mentionedMemberList,
    }
  );
};
