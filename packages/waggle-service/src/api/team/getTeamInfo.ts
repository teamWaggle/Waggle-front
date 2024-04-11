import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { DefaultApiResponseType } from "@/types/common";
import type { TeamInfoType } from "@/types/team";

export const getTeamInfo = async (teamId: number) => {
  const { data } = await axiosInstance.get<DefaultApiResponseType<TeamInfoType>>(
    END_POINTS.TEAM_INFO(teamId)
  );
  return data;
};
