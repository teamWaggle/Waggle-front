import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const deleteTeamSchedule = async (scheduleId: number) => {
  const { data } = await authorizedAxiosInstance.delete(
    END_POINTS.DELETE_TEAM_SCHEDULE(scheduleId)
  );
  return data;
};
