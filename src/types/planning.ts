import type { MemberType } from "@/types/auth";

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
	teamColor: TeamColorType;
}
export interface ScheduleType {
	boardId: number;
	teamId: number;
	teamColor: TeamColorType;
	title: string;
	content: string;
	startTime: Date;
	endTime: Date;
	createdDate: Date;
	status: string;
	member: MemberType;
}

export interface SchedulePositionType {
	row: number;
	column: number;
	index: number;
}

export interface ScheduleCalendarCardType {
	index: number;
	day: Date;
	schedules: Array<ScheduleType>;
	isSameMonth?: boolean;
	position: SchedulePositionType;
}

export interface DefaultResultType {
	isFirst: boolean;
	isLast: boolean;
}

export interface ScheduleResultType extends DefaultResultType {
	scheduleList: Array<ScheduleType>;
	scheduleCount: number;
}

export interface TeamResultType extends DefaultResultType {
	teamList: Array<TeamCardType>;
	teamCount: number;
}

export type DatePickerFormatType = "date" | "time";
