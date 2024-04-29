import { isLoggedInState } from "./../../../recoil/atoms/auth";
import type { AxiosError } from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getTeamScheduleListPage } from "@/api/schedule/getTeamScheduleListPage";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { TeamScheduleInfoType } from "@/types/schedule";
import { getTeamScheduleListPageAuth } from "@/api/schedule/getTeamScheduleListPageAuth";
import { useRecoilValue } from "recoil";

export const useTeamScheduleListPage = (teamId: number) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const {
    data: teamScheduleListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<TeamScheduleInfoType, AxiosError>({
    queryKey: [QUERY_KEYS.TEAM_SCHEDULE_PAGE, { teamId }],
    queryFn: ({ pageParam }) =>
      isLoggedIn
        ? getTeamScheduleListPageAuth(teamId, pageParam)
        : getTeamScheduleListPage(teamId, pageParam),
    enabled: !!teamId,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });
  return { teamScheduleListData, fetchNextPage, hasNextPage, isFetching };
};
