import { authorizedAxiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";
import type { CommonResponseResultBooleanType } from "@/types/common";

export const cancelMemberSchedule = async (scheduleId: number) => {
  const { data } = await authorizedAxiosInstance.delete<CommonResponseResultBooleanType>(
    END_POINTS.CANCEL_MEMBER_SCHEDULE(scheduleId)
  );
  return data;
};
