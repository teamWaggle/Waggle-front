import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postMedia } from "@/api/media/postMedia";

export const usePostMediaMutation = () => {
  const postMediaMutation = useMutation({
    mutationFn: postMedia,
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postMediaMutation;
};
