import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getMemberSchedules } from "@/api/schedule/getMemberSchedules";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/common";
import type { ScheduleResultType } from "@/types/planning";

export const useGetMemberSchedules = () => {
  return useQuery<DefaultApiResponseType<ScheduleResultType>, AxiosError>({
    queryKey: [QUERY_KEYS.SCHEDULE],
    queryFn: getMemberSchedules,
  });
};
