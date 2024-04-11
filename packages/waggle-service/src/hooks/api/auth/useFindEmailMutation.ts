import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { getFindEmail } from "@/api/auth/getFindEmail";

export const useFindEmailMutation = () => {
  const findEmailMutation = useMutation({
    mutationFn: getFindEmail,
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return findEmailMutation;
};
