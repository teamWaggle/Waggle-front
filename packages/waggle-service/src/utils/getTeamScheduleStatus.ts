import type { TeamScheduleStatusType } from "@/types/schedule";

export const getTeamScheduleStatus = (status: TeamScheduleStatusType) => {
  switch (status) {
    case "IN_PROGRESS":
      return "진행중";
    case "UPCOMING":
      return "예정";
    case "CLOSING":
      return "마감";
  }
};
