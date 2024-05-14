import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { TeamScheduleInfoType } from "@/types/schedule";

export const getTeamScheduleListPageAuth = async (teamId: number, currentPage: unknown) => {
  const { data } = await authorizedAxiosInstance.get<TeamScheduleInfoType>(
    END_POINTS.GET_TEAM_SCHEDULE_PAGE_AUTH(teamId, currentPage)
  );

  return { ...data, nextPageParam: (currentPage as number) + 1 };
};
