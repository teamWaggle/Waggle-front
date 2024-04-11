import type { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import { getMemberTeams } from "@/api/team/getMemberTeams";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { DefaultApiResponseType } from "@/types/common";
import type { TeamResultType } from "@/types/team";

export const useGetMemberTeams = (memberId: number) => {
  const { data } = useQuery<DefaultApiResponseType<TeamResultType>, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBER_TEAMS],
    queryFn: () => getMemberTeams(memberId),
    enabled: !!memberId,
  });
  const { teamList } = data?.result || {};
  return teamList;
};
