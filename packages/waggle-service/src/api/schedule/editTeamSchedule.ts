import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { FieldValues } from "react-hook-form";

export const editTeamSchedule = async (scheduleId: number, teamScheduleInput: FieldValues) => {
  const { data } = await authorizedAxiosInstance.put(
    END_POINTS.EDIT_TEAM_SCHEDULE(scheduleId),
    teamScheduleInput
  );
  return data;
};
