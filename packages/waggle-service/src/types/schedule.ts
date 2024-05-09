import type { DefaultApiResponseType } from "@/types/common";
import type { TeamColorType, TeamMemberType } from "@/types/team";

export type TeamScheduleInfoType = DefaultApiResponseType<TeamScheduleResultType>;

export interface TeamScheduleType {
  boardId: number;
  teamId: number;
  teamColor: TeamColorType;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  createdDate: string;
  status: TeamScheduleStatusType;
  scheduleOwner: TeamMemberType;
  isScheduled: boolean;
  overlappedScheduleList: Array<overlappedScheduleType>;
  overlappedScheduleCount: number;
}
export interface overlappedScheduleType {
  teamName: string;
  teamColor: TeamColorType;
  scheduleTitle: string;
}

export type TeamScheduleStatusType = "IN_PROGRESS" | "UPCOMING" | "CLOSING";

interface TeamScheduleResultType {
  scheduleList: Array<TeamScheduleType>;
  nextPageParam: number;
  scheduleCount: number;
  isFirst: boolean;
  isLast: boolean;
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

export interface ScheduleMemberListType {
  memberList: Array<TeamMemberType>;
  memberCount: number;
}
