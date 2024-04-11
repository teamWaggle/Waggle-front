import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";

export const getMemberSchedules = async () => {
  const memberId = Number(localStorage.getItem("MEMBER_ID"));
  const { data } = await axiosInstance.get<DefaultApiResponseType<ScheduleResultType>>(
    END_POINTS.MEMBER_SCHEDULES(memberId)
  );
  return data;
};
