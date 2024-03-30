import type { AxiosError } from "axios";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getMemberScheduleMonthly } from "@/api/schedule/getMemberScheduleMonthly";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/api";
import type { ScheduleResultType } from "@/types/planning";

export const useGetMemberScheduleMonthly = (year: number, month: number) => {
	const useScheduleMonthlyQuery = useQuery<DefaultApiResponseType<ScheduleResultType>, AxiosError>({
		queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY(year, month)],
		queryFn: () => getMemberScheduleMonthly(year, month),
	});
	return useScheduleMonthlyQuery;
};

export const prefetchScheduleMonthly = (year: number, month: number) => {
	const queryClient = useQueryClient();
	return queryClient.prefetchQuery({
		queryKey: [QUERY_KEYS.SCHEDULE_MONTHLY(year, month)],
		queryFn: () => getMemberScheduleMonthly(year, month),
	});
};
