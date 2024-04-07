export const QUERY_KEYS = {
	//auth
	REISSUE_TOKEN: "reissueToken",

	SCHEDULE: "schedule",
	SCHEDULE_MONTHLY: (year: number, month: number) => `schedule/${year}/${month}`,

	MEMBER_TEAMS: "memberTeams",
	TEAM_INFO: (teamId: number) => `teamInfo/${teamId}`,

	TEAM_SCHEDULE_PAGE: (teamId: number) => `teamSchedule/${teamId}`,
};
