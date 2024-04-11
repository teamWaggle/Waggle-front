import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePetInfo } from "@/api/pet/deletePetInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useDeletePetMutation = () => {
  const queryClient = useQueryClient();

  const deletePetMutation = useMutation({
    mutationFn: deletePetInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PET_INFO] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return deletePetMutation;
};
