import type { AxiosError } from "axios";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getMemberTeams } from "@/api/team/getMemberTeams";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

export const useGetMemberTeams = () => {
  const { memberId } = useMemberInfoSaveQuery();

  const {
    data: memberTeamsData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useSuspenseInfiniteQuery<DefaultApiResponseType<TeamResultType>, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_TEAMS],
    queryFn: ({ pageParam: page }) => getMemberTeams(memberId, page),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.isLast ? undefined : lastPage.nextPageParam;
    },
  });
  return { memberTeamsData, fetchNextPage, hasNextPage, isFetching };
};
