import { useMutation } from "@tanstack/react-query";

import { postFollow } from "@/api/follow/postFollow";

export const usePostFollow = () => {
  const followMutation = useMutation({
    mutationFn: postFollow,
  });

  return followMutation;
};
