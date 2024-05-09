import { getScheduleMembers } from "@/api/schedule/getScheduleMembers";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleMemberListType } from "@/types/schedule";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useScheduleMembers = (scheduleId: number) => {
  const { data } = useSuspenseQuery<DefaultApiResponseType<ScheduleMemberListType>>({
    queryKey: [QUERY_KEYS.SCHEDULE_MEMBERS, { scheduleId }],
    queryFn: () => getScheduleMembers(scheduleId),
  });
  const { result } = data;
  const { memberList } = result;
  const memtionList = memberList.map((member) => ({
    id: member.userUrl,
    display: member.nickname,
  }));
  return { memtionList };
};
