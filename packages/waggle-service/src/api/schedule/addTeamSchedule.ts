import type { FieldValues } from "react-hook-form";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const addTeamSchedule = async (teamId: number, teamScheduleInput: FieldValues) => {
  return await authorizedAxiosInstance.post(
    END_POINTS.ADD_TEAM_SCHEDULE(teamId),
    teamScheduleInput
  );
};
