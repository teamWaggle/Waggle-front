import type { HTTPError } from "@/api/HTTPError";
import { addTeamScheduleToMySchedule } from "@/api/schedule/addTeamScheduleToMySchedule";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { CommonResponseResultBooleanType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTeamScheduleToMySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<CommonResponseResultBooleanType, HTTPError, number>({
    mutationKey: [QUERY_KEYS.ADD_TEAM_SCHEDULE_TO_MY_SCHEDULE],
    mutationFn: (scheduleId: number) => addTeamScheduleToMySchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
