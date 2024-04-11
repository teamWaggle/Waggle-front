import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postComment } from "@/api/comment/postComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient();

  const postCommentMutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postCommentMutation;
};
