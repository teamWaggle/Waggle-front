import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postEmailAuthVerify } from "@/api/auth/postEmailAuthVerify";

export const useEmailAuthVerifyMutation = () => {
  const emailAuthVerifyMutation = useMutation({
    mutationFn: postEmailAuthVerify,
    onSuccess: () => {
      toast.success("인증 완료");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return emailAuthVerifyMutation;
};
