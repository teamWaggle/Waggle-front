import type { HTTPError } from "@/api/HTTPError";
import { addTeamScheduleToMySchedule } from "@/api/schedule/addTeamScheduleToMySchedule";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { CommonResponseResultBooleanType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAddTeamScheduleToMySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponseResultBooleanType, HTTPError, number>({
    mutationKey: [QUERY_KEYS.ADD_TEAM_SCHEDULE_TO_MY_SCHEDULE],
    mutationFn: (scheduleId: number) => addTeamScheduleToMySchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
      });
      toast.success("스케줄이 추가되었습니다.");
    },
  });
};
