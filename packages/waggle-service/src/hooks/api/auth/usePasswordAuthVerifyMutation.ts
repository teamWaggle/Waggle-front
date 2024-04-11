import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postPasswordAuthVerify } from "@/api/auth/postPasswordAuthVerify";

export const usePasswordAuthVerifyMutation = () => {
  const passwordAuthVerifyMutation = useMutation({
    mutationFn: postPasswordAuthVerify,
    onSuccess: () => {
      console.log("password auth success");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return passwordAuthVerifyMutation;
};
