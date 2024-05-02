import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getMemberSirenComment } from "@/api/member/getMemberSirenComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommentType } from "@/types/comment";

export const useMemberSirenCommentQuery = (currentPage: number, userUrl?: string) => {
  const { data: memberSirenCommentData } = useSuspenseQuery<CommentType, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_SIREN_COMMENT, userUrl],
    queryFn: () => getMemberSirenComment(currentPage, userUrl),
  });

  return { memberSirenCommentData };
};
