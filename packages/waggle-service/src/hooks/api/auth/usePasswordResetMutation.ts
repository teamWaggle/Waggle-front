import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { putPasswordReset } from "@/api/auth/putPasswordReset";

export const usePasswordResetMutation = () => {
  const resetPasswordMutation = useMutation({
    mutationFn: putPasswordReset,
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return resetPasswordMutation;
};
