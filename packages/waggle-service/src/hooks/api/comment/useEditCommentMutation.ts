import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putComment } from "@/api/comment/putComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient();

  const editCommentMutation = useMutation({
    mutationFn: putComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return editCommentMutation;
};
