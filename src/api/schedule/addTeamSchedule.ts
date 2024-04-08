import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { TeamScheduleInputType } from "@/types/schedule";

export const addTeamSchedule = async (teamId: number, teamScheduleInput: TeamScheduleInputType) => {
	return await authorizedAxiosInstance.post(
		END_POINTS.ADD_TEAM_SCHEDULE(teamId),
		teamScheduleInput,
	);
};
