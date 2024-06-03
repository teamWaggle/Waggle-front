import type { MemberType } from "@/types/auth";
import type { TeamColorType } from "@/types/team";

export interface ScheduleType {
  boardId: number;
  teamId: number;
  teamName: string;
  teamColor: TeamColorType;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
  status: string;
  scheduleOwner: MemberType;
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
