import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleMemberListType } from "@/types/schedule";

export const getScheduleMembers = async (scheduleId: number) => {
  const { data } = await axiosInstance.get<DefaultApiResponseType<ScheduleMemberListType>>(
    END_POINTS.GET_SCHEDULE_MEMBERS(scheduleId)
  );
  return data;
};
