import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const deleteTeam = async (teamId: number) => {
  return await authorizedAxiosInstance.delete(END_POINTS.DELETE_TEAM(teamId));
};
