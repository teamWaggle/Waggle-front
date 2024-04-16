import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";

export const putTeamParticipation = async (teamId: number, memberId: number, isAccept: boolean) => {
  const { data } = await authorizedAxiosInstance.put<CommonResponseResultBooleanType>(
    END_POINTS.TEAM_PARTICIPATION_ACCEPT(teamId, memberId, isAccept)
  );

  return data;
};
