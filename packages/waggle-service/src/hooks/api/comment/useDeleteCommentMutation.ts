import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteComment } from "@/api/comment/deleteComment";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT] });
      toast.success("댓글이 삭제되었습니다");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return deleteCommentMutation;
};
