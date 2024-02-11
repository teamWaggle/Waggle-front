export type TeamColorType =
	| "team1"
	| "team2"
	| "team3"
	| "team4"
	| "team5"
	| "team6"
	| "team7"
	| "team8";

export interface TeamCardType {
	teamId: number;
	name: string;
	coverImageUrl: string;
	description: string;
	teamSize: number;
	maxTeamSize: number;
	colorScheme: TeamColorType;
}
export interface ScheduleType {
	scheduleId: number;
	teamId: number;
	title: string;
	content: string;
	startTime: Date;
	endTime: Date;
	color: TeamColorType;
}
export interface CalendarCardType {
	index: number;
	day: Date;
	schedules: Array<ScheduleType>;
	isSameMonth?: boolean;
}
