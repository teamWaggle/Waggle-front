import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putMemberInfo } from "@/api/member/putMemberInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useMemberInfoMutation = () => {
  const queryClient = useQueryClient();

  const memberInfoMutation = useMutation({
    mutationFn: putMemberInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_INFO] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return memberInfoMutation;
};
