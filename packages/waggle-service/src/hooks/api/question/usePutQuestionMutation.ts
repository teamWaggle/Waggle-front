import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putQuestion } from "@/api/question/putQuestion";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePutQuestionMutation = () => {
  const queryClient = useQueryClient();

  const putQuestionMutation = useMutation({
    mutationFn: putQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.QUESTION],
      });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return putQuestionMutation;
};
