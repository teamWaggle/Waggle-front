import { getDate } from "@/utils/getDate";

import type { TeamScheduleDateTimeType, TeamScheduleInputType } from "@/types/schedule";

export const convertToTeamScheduleDataFormat = (teamScheduleData: TeamScheduleInputType<Date>) => {
	const { getYearMonthDay, getTime } = getDate();
	const convertedTeamScheduleData: TeamScheduleInputType<Date | TeamScheduleDateTimeType> = {
		...teamScheduleData,
	};
	convertedTeamScheduleData.startDate = getYearMonthDay(teamScheduleData.startDate);
	convertedTeamScheduleData.endDate = getYearMonthDay(teamScheduleData.endDate);
	convertedTeamScheduleData.startTime = getTime(teamScheduleData.startTime);
	convertedTeamScheduleData.endTime = getTime(teamScheduleData.endTime);
	return convertedTeamScheduleData;
};
