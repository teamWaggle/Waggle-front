import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { TeamScheduleInfoType } from "@/types/schedule";

export const getTeamScheduleListPeriod = async (
  teamId: number,
  startDate: string,
  endDate: string
) => {
  const { data } = await authorizedAxiosInstance.get<TeamScheduleInfoType>(
    END_POINTS.GET_TEAM_SCHEDULE_PERIOD(teamId, startDate, endDate)
  );
  return data;
};
