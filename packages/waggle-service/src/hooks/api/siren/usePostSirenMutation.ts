import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postSiren } from "@/api/siren/postSiren";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostSirenMutation = () => {
  const queryClient = useQueryClient();

  const postSirenMutation = useMutation({
    mutationFn: postSiren,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SIREN_LIST] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postSirenMutation;
};
