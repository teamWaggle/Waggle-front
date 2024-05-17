import { END_POINTS } from "@/constants/api";
import type { CommonResponseType } from "@/types/common";
import type { AxiosResponse } from "axios";
import { authorizedAxiosInstance } from "./../axiosInstance";
export const requestTeamParticipation = async (teamId: number) => {
  const { data } = await authorizedAxiosInstance.post<AxiosResponse<CommonResponseType>>(
    END_POINTS.TEAM_PARTICIPATION_REQUEST(teamId)
  );
  return data;
};
