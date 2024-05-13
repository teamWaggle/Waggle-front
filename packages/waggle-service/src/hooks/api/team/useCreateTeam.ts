import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCreateTeam } from "@/api/team/postCreateTeam";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { toast } from "react-toastify";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCreateTeam,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_TEAMS] });
      toast("팀이 생성되었습니다.");
    },
  });
};
