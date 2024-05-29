import { getSearchTeamsByName } from "@/api/team/getSearchTeamsByName";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetSearchTeamsByName = (name: string) => {
  const {
    data: searchTeamsData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<DefaultApiResponseType<TeamResultType>>({
    queryKey: [QUERY_KEYS.SEARCH_TEAMS_BY_NAME],
    queryFn: ({ pageParam: page }) => getSearchTeamsByName(name, page),
    initialPageParam: 0,
    enabled: !!name,
    getNextPageParam: (lastPage) => {
      return lastPage.result.isLast ? undefined : lastPage.nextPageParam;
    },
  });
  return { searchTeamsData, fetchNextPage, hasNextPage, isFetching };
};
