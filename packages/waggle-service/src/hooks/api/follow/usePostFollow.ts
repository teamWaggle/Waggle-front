import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postFollow } from "@/api/follow/postFollow";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostFollow = () => {
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: postFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FOLLOW],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.MEMBER_INFO],
      });
    },
  });

  return followMutation;
};
