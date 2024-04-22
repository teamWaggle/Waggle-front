import type { AxiosError } from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getTeamScheduleListPage } from "@/api/schedule/getTeamScheduleListPage";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { TeamScheduleInfoType } from "@/types/schedule";

export const useTeamScheduleListPage = (teamId: number) => {
  const {
    data: teamScheduleListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<TeamScheduleInfoType, AxiosError>({
    queryKey: [QUERY_KEYS.TEAM_SCHEDULE_PAGE, { teamId }],
    queryFn: ({ pageParam }) => getTeamScheduleListPage(teamId, pageParam),
    enabled: !!teamId,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });
  return { teamScheduleListData, fetchNextPage, hasNextPage, isFetching };
};
