import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postComment } from "@/api/comment/postComment";

import { QUERY_KEYS } from "@/constants/queryKeys";
import type { CommonResponseType } from "@/types/common";
import type { HTTPError } from "@/api/HTTPError";
import type { CommentPropsType } from "@/types/comment";

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient();

  const postCommentMutation = useMutation<CommonResponseType, HTTPError, CommentPropsType>({
    mutationFn: (comment: CommentPropsType) => postComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postCommentMutation;
};
