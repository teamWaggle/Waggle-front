import { useMutation } from "@tanstack/react-query";

import { getCheckUserUrl } from "@/api/auth/getCheckUserUrl";

export const useCheckUserUrlMutation = () => {
  const checkUserUrlMutation = useMutation({
    mutationFn: getCheckUserUrl,
  });

  return checkUserUrlMutation;
};
