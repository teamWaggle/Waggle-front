import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putStory } from "@/api/story/putStory";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePutStoryMutation = () => {
  const queryClient = useQueryClient();

  const putStoryMutation = useMutation({
    mutationFn: putStory,
    onSuccess: () => {
      console.log("story edit success");

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STORY] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return putStoryMutation;
};
