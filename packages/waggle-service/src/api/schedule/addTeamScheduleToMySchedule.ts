import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";
export const addTeamScheduleToMySchedule = async (scheduleId: number) => {
  const { data } = await authorizedAxiosInstance.post<CommonResponseResultBooleanType>(
    END_POINTS.ADD_TEAM_SCHEDULE_TO_MY_SCHEDULE(scheduleId)
  );
  return data;
};
