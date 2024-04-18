import type { HTTPError } from "@/api/HTTPError";
import { addTeamScheduleToMySchedule } from "@/api/schedule/addTeamScheduleToMySchedule";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { CommonResponseResultBooleanType } from "@/types/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";

export const useAddTeamScheduleToMySchedule = (startDate: string, endDate: string) => {
  const queryClient = useQueryClient();
  const startYear = format(startDate, "yyyy");
  const endYear = format(endDate, "yyyy");
  const startMonth = format(startDate, "M");
  const endMonth = format(endDate, "M");
  return useMutation<CommonResponseResultBooleanType, HTTPError, number>({
    mutationKey: [QUERY_KEYS.ADD_TEAM_SCHEDULE_TO_MY_SCHEDULE],
    mutationFn: (scheduleId: number) => addTeamScheduleToMySchedule(scheduleId),
    onSuccess: (result) => {
      console.log(result);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { year: startYear }, { month: startMonth }],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { year: endYear }, { month: endMonth }],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
