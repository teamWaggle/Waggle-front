import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postPetInfo } from "@/api/pet/postPetInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePetInfoMutation = () => {
  const queryClient = useQueryClient();

  const petInfoMutation = useMutation({
    mutationFn: postPetInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PET_INFO] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return petInfoMutation;
};
