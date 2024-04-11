import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteStory } from "@/api/story/deleteStory";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDeleteStoryMutation = () => {
  const queryClient = useQueryClient();

  const deleteStoryMutation = useMutation({
    mutationFn: deleteStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STORY_LIST] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return deleteStoryMutation;
};
