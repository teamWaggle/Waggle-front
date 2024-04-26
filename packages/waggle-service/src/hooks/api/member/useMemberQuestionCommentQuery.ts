import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberQuestionComment } from "@/api/member/getMemberQuestionComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useMemberQuestionCommentQuery = (currentPage: number, userUrl?: string) => {
  const { data: memberQuestionCommentData } = useSuspenseQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_QUESTION_COMMENT, userUrl],
    queryFn: () => getMemberQuestionComment(currentPage, userUrl),
  });

  return { memberQuestionCommentData };
};
