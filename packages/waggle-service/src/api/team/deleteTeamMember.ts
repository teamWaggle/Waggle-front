import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";

export const deleteTeamMember = async (teamId: number, memberId: number) => {
  const { data } = await authorizedAxiosInstance.delete<CommonResponseResultBooleanType>(
    END_POINTS.DELETE_TEAM_MEMBER(teamId, memberId)
  );
  return data;
};
