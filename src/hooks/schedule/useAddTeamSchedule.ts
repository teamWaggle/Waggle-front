import { useMutation } from "@tanstack/react-query";

import { addTeamSchedule } from "@/api/schedule/addTeamSchedule";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { TeamScheduleInputType } from "@/types/schedule";

export const useAddTeamSchedule = (teamId: number, teamScheduleInput: TeamScheduleInputType) => {
	return useMutation({
		mutationKey: [QUERY_KEYS.ADD_TEAM_SCHEDULE(teamId)],
		mutationFn: () => addTeamSchedule(teamId, teamScheduleInput),
	});
};
