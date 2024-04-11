import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postRecommend } from "@/api/recommend/postRecommend";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostRecommend = () => {
  const queryClient = useQueryClient();

  const postRecommendMutation = useMutation({
    mutationFn: postRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SIREN] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.QUESTION] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.QUESTION_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SIREN_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SIREN_REPRESENTATIVE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.QUESTION_REPRESENTATIVE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STORY] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECOMMEND] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postRecommendMutation;
};
