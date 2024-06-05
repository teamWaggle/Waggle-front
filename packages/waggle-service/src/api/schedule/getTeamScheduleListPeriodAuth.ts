import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { TeamScheduleInfoType } from "@/types/schedule";

export const getTeamScheduleListPeriodAuth = async (
  teamId: number,
  startDate: string,
  endDate: string
) => {
  const { data } = await authorizedAxiosInstance.get<TeamScheduleInfoType>(
    END_POINTS.GET_TEAM_SCHEDULE_PERIOD_AUTH(teamId, startDate, endDate)
  );
  return data;
};
