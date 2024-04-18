import { deleteTeamMember } from "@/api/team/deleteTeamMember";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteTeamMember = () => {
  const teamId = useParamsTeamId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_TEAM_MEMBER],
    mutationFn: ({ memberId }: { memberId: number }) => deleteTeamMember(teamId, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEAM_INFO] });
      toast.success("팀원이 삭제되었습니다.");
    },
  });
};
