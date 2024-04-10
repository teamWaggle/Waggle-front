import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { TeamScheduleDateTimeType, TeamScheduleInputType } from "@/types/schedule";

export const addTeamSchedule = async (
	teamId: number,
	teamScheduleInput: TeamScheduleInputType<TeamScheduleDateTimeType>,
) => {
	return await authorizedAxiosInstance.post(
		END_POINTS.ADD_TEAM_SCHEDULE(teamId),
		teamScheduleInput,
	);
};
