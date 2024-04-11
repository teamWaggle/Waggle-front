import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postQuestion } from "@/api/question/postQuestion";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostQuestionMutation = () => {
  const queryClient = useQueryClient();

  const postQuestionMutation = useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.QUESTION_LIST],
      });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postQuestionMutation;
};
