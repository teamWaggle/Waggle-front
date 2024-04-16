import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamParticipationListType } from "@/types/team";

export const getTeamParticipationList = async (teamId: number) => {
  const { data } = await authorizedAxiosInstance.get<
    DefaultApiResponseType<TeamParticipationListType>
  >(END_POINTS.TEAM_PARTICIPATION_LIST(teamId));

  return data;
};
