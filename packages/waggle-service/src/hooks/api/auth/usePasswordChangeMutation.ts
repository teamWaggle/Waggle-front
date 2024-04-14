import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { putPasswordChange } from "@/api/auth/putChangePassword";

export const usePasswordChangeMutation = () => {
  const changePasswordMutation = useMutation({
    mutationFn: putPasswordChange,
    onSuccess: () => {
      toast.success("비밀번호 변경이 완료되었습니다.");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return changePasswordMutation;
};
