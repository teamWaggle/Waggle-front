import type { AxiosError } from "axios";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getMemberScheduleMonthly } from "@/api/schedule/getMemberScheduleMonthly";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";

export const useGetMemberScheduleMonthly = (memberId: number, year: number, month: number) => {
  return useQuery<DefaultApiResponseType<ScheduleResultType>, AxiosError>({
    queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { memberId, year, month }],
    queryFn: () => getMemberScheduleMonthly(memberId, year, month),
    enabled: !!memberId,
  });
};

export const prefetchScheduleMonthly = (memberId: number, year: number, month: number) => {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { memberId, year, month }],
    queryFn: () => getMemberScheduleMonthly(memberId, year, month),
    staleTime: 1000 * 30,
  });
};
