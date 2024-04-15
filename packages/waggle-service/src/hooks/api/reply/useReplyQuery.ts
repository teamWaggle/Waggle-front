import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getReply } from "@/api/reply/getReply";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { ReplyType } from "@/types/reply";

export const useReplyQuery = (currentPage: number, commentId: number) => {
  const { data: replyData } = useSuspenseQuery<ReplyType, AxiosError>({
    queryKey: [QUERY_KEYS.REPLY, commentId],
    queryFn: () => getReply(currentPage, commentId),
  });

  return { replyData };
};
