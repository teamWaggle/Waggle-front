import { editTeamSchedule } from "@/api/schedule/editTeamSchedule";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useEditTeamSchedule = (scheduleId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.EDIT_TEAM_SCHEDULE],
    mutationFn: (teamScheduleInput: FieldValues) => editTeamSchedule(scheduleId, teamScheduleInput),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TEAM_SCHEDULE_PAGE],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
      });
      toast.success("스케줄이 수정되었습니다.");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};
