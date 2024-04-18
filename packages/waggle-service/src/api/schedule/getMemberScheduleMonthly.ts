import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";

export const getMemberScheduleMonthly = async (userUrl: string, year: number, month: number) => {
  const { data } = await axiosInstance.get<DefaultApiResponseType<ScheduleResultType>>(
    END_POINTS.MEMBER_SCHEDULES_MONTHLY(userUrl, year, month)
  );
  return data;
};
