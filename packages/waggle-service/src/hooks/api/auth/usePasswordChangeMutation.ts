import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { putChangePassword } from "@/api/auth/putChangePassword";

export const useChangePasswordMutation = () => {
  const changepasswordMutation = useMutation({
    mutationFn: putChangePassword,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return changepasswordMutation;
};
