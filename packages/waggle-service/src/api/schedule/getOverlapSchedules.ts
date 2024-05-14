import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { DefaultApiResponseType } from "@/types/common";
import type { OverlapScheduleType } from "@/types/schedule";

export const getOverlapSchedules = async (scheduleId: number) => {
  const { data } = await authorizedAxiosInstance.get<DefaultApiResponseType<OverlapScheduleType>>(
    END_POINTS.GET_OVERLAP_SCHEDULE(scheduleId)
  );
  return data;
};
