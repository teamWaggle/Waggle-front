import { getRecommendTeams } from "@/api/team/getRecommendTeams";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetRecommendTeams = () => {
  const {
    data: recommendTeamsData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<DefaultApiResponseType<TeamResultType>>({
    queryKey: [QUERY_KEYS.RECOMMEND_TEAMS],
    queryFn: ({ pageParam }) => getRecommendTeams(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextPageParam === -1 ? undefined : lastPage.result.nextPageParam;
    },
  });

  return { recommendTeamsData, fetchNextPage, hasNextPage, isFetching };
};
