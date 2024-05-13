import { deleteTeam } from "@/api/team/deleteTeam";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_TEAMS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY] });
      toast.success("팀이 삭제되었습니다.");
    },
  });
};
