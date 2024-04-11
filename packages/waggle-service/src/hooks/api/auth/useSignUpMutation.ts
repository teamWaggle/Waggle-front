import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postSignUp } from "@/api/auth/postSignUp";

export const useSignUpMutation = () => {
  const signUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      console.log("signup success");
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return signUpMutation;
};
