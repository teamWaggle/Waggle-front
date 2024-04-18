import type { HTTPError } from "@/api/HTTPError";
import { deleteTeamMember } from "@/api/team/deleteTeamMember";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import type { CommonResponseResultBooleanType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTeamMember = () => {
  const teamId = useParamsTeamId();
  const queryClient = useQueryClient();
  return useMutation<CommonResponseResultBooleanType, HTTPError, number>({
    mutationKey: [QUERY_KEYS.DELETE_TEAM_MEMBER],
    mutationFn: (memberId: number) => deleteTeamMember(teamId, memberId),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEAM_INFO] });
      console.log(result);
    },
  });
};
