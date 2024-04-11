import { useMutation } from "@tanstack/react-query";

import { getCheckEmail } from "@/api/auth/getCheckEmail";

export const useCheckEmailMutation = () => {
  const checkEmailMutation = useMutation({
    mutationFn: getCheckEmail,
  });

  return checkEmailMutation;
};
