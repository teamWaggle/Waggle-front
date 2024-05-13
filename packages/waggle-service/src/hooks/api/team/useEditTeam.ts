import type { HTTPError } from "@/api/HTTPError";
import { putEditTeam } from "@/api/team/putTeamInfo";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import type { CommonResponseResultBooleanType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useEditTeam = () => {
  const queryClient = useQueryClient();
  const teamId = useParamsTeamId();
  return useMutation<CommonResponseResultBooleanType, HTTPError, FormData>({
    mutationFn: (formData: FormData) => putEditTeam(teamId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEAM_INFO, { teamId }] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY] });
      toast.success("팀 정보가 수정되었습니다.");
    },
  });
};
