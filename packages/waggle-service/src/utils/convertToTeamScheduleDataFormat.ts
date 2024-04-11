import type { FieldValues } from "react-hook-form";

import { getDate } from "@/utils/getDate";

export const convertToTeamScheduleDataFormat = (teamScheduleData: FieldValues) => {
  const { getYearMonthDay, getTime } = getDate();
  const convertedTeamScheduleData = {
    ...teamScheduleData,
  };
  convertedTeamScheduleData.startDate = getYearMonthDay(teamScheduleData.startDate);
  convertedTeamScheduleData.endDate = getYearMonthDay(teamScheduleData.endDate);
  convertedTeamScheduleData.startTime = getTime(teamScheduleData.startTime);
  convertedTeamScheduleData.endTime = getTime(teamScheduleData.endTime);
  return convertedTeamScheduleData;
};
