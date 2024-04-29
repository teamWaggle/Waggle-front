import type { AxiosError } from "axios";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getMemberScheduleMonthly } from "@/api/schedule/getMemberScheduleMonthly";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

export const useGetMemberScheduleMonthly = (year: number, month: number) => {
  const { userUrl } = useMemberInfoSaveQuery();

  return useQuery<DefaultApiResponseType<ScheduleResultType>, AxiosError>({
    queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { year }, { month }, { userUrl }],
    queryFn: () => getMemberScheduleMonthly(userUrl, year, month),
    enabled: !!userUrl,
  });
};

export const prefetchScheduleMonthly = (year: number, month: number) => {
  const queryClient = useQueryClient();
  const { userUrl } = useMemberInfoSaveQuery();

  return queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY, { year }, { month }, { userUrl }],
    queryFn: () => getMemberScheduleMonthly(userUrl, year, month),
    staleTime: 1000 * 30,
  });
};
