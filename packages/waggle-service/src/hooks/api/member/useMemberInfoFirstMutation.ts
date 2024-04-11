import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putMemberInfoFirst } from "@/api/member/putMemberInfoFirst";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useMemberInfoFirstMutation = () => {
  const queryClient = useQueryClient();

  const memberInfoMutation = useMutation({
    mutationFn: putMemberInfoFirst,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_INFO] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return memberInfoMutation;
};
