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
	title: string;
	photoUrl: string;
	subtitle: string;
	groupSize: number;
	color: TeamColorType;
	onClick: () => void;
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
