import { getOverlapSchedules } from "@/api/schedule/getOverlapSchedules";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useOverlapSchedules = (scheduleId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.OVERLAP_SCHEDULES, { scheduleId }],
    queryFn: () => getOverlapSchedules(scheduleId),
  });
  const { result } = data;
  const { overlappedScheduleDtoList } = result;
  return overlappedScheduleDtoList;
};
