import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putPetInfo } from "@/api/pet/putPetInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePutPetInfoMutation = () => {
  const queryClient = useQueryClient();

  const putPetInfoMutation = useMutation({
    mutationFn: putPetInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PET_INFO] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return putPetInfoMutation;
};
