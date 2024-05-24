import type { FieldValues } from "react-hook-form";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addTeamSchedule } from "@/api/schedule/addTeamSchedule";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { toast } from "react-toastify";

export const useAddTeamSchedule = (teamId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TEAM_SCHEDULE, { teamId }],
    mutationFn: (teamScheduleInput: FieldValues) => addTeamSchedule(teamId, teamScheduleInput),
    onSuccess: () => {
      toast.success("일정이 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEAM_SCHEDULE_PAGE, { teamId }] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY] });
    },
  });
};
