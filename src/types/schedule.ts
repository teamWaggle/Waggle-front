import type { DefaultApiResponseType } from "@/types/common";
import type { TeamColorType, TeamMemberType } from "@/types/team";

export interface TeamScheduleInfoType extends DefaultApiResponseType<TeamScheduleResultType> {
	scheduleCount: number;
	isFirst: boolean;
	isLast: boolean;
}

export interface TeamScheduleType {
	boardId: number;
	teamId: number;
	teamColor: TeamColorType;
	title: string;
	content: string;
	startDate: string;
	endDate: string;
	createdDate: string;
	status: string;
	member: Array<TeamMemberType>;
}

interface TeamScheduleResultType {
	scheduleList: Array<TeamScheduleType>;
	nextPageParam: number;
}

export type TeamScheduleDateTimeType = string;

export interface TeamScheduleInputType<T> {
	title: string;
	content: string;
	startDate: T;
	endDate: T;
	startTime: T;
	endTime: T;
}
