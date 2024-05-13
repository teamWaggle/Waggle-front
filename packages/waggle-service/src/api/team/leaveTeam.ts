import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";

export const leaveTeam = async (teamId: number) => {
  const { data } = await authorizedAxiosInstance.delete<CommonResponseResultBooleanType>(
    END_POINTS.LEAVE_TEAM(teamId)
  );
  return data;
};
