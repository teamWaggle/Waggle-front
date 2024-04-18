import { deleteTeamMember } from "@/api/team/deleteTeamMember";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/useParamsTeamId";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTeamMember = () => {
  const teamId = useParamsTeamId();
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_TEAM_MEMBER],
    mutationFn: ({ memberId }: { memberId: number }) => deleteTeamMember(teamId, memberId),
  });
};
