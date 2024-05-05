import { useMutation } from "@tanstack/react-query";

import { postUnfollow } from "@/api/follow/postUnfollow";

export const usePostUnfollow = () => {
  const unFollowMutation = useMutation({
    mutationFn: postUnfollow,
  });

  return unFollowMutation;
};
