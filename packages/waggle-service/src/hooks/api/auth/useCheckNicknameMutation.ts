import { useMutation } from "@tanstack/react-query";

import { getCheckNickname } from "@/api/auth/getCheckNickname";

export const useCheckNicknameMutation = () => {
  const checkNicknameMutation = useMutation({
    mutationFn: getCheckNickname,
  });

  return checkNicknameMutation;
};
