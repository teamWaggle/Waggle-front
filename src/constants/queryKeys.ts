export const QUERY_KEYS = {
	//auth
	REISSUE_TOKEN: "reissueToken",

	STORY: "story",
	STORY_LIST: "storyList",

	SIREN: "siren",
	SIREN_LIST: "sirenList",
	SIREN_REPRESENTATIVE: "sirenRepresentative",

	QUESTION_LIST: "questionList",
	QUESTION: "question",
	QUESTION_REPRESENTATIVE: "questionRepresentative",

	COMMENT: "comment",

	REPLY: "reply",

	MEMBER_INFO: "memberInfo",
	MEMBER_QUESTION: "memberQuestion",
	MEMBER_SIREN: "memberSiren",
	MEMBER_STORY: "memberStory",

	PET_INFO: "petInfo",

	RECOMMEND: "recommend",

	SCHEDULE: "schedule",
	SCHEDULE_MONTHLY: (year: number, month: number) => `schedule/${year}/${month}`,
	ADD_TEAM_SCHEDULE: (teamId: number) => `addTeamSchedule/${teamId}`,

	MEMBER_TEAMS: "memberTeams",
	TEAM_INFO: (teamId: number) => `teamInfo/${teamId}`,

	TEAM_SCHEDULE_PAGE: (teamId: number) => `teamSchedule/${teamId}`,
};
