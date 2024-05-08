import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postUnfollow } from "@/api/follow/postUnfollow";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostUnfollow = () => {
  const queryClient = useQueryClient();

  const unFollowMutation = useMutation({
    mutationFn: postUnfollow,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FOLLOW],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.MEMBER_INFO],
      });
    },
  });

  return unFollowMutation;
};
