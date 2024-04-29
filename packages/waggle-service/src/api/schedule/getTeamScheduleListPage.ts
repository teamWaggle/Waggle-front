import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { TeamScheduleInfoType } from "@/types/schedule";

export const getTeamScheduleListPage = async (teamId: number, currentPage: unknown) => {
  const { data } = await axiosInstance.get<TeamScheduleInfoType>(
    END_POINTS.GET_TEAM_SCHEDULE_PAGE(teamId, currentPage)
  );

  return { ...data, nextPageParam: (currentPage as number) + 1 };
};
