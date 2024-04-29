import { useSuspenseQuery } from "@tanstack/react-query";

import { getTeamInfo } from "@/api/team/getTeamInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamInfoType } from "@/types/team";

export const useTeamInfo = (teamId: number) => {
  const { data } = useSuspenseQuery<DefaultApiResponseType<TeamInfoType>>({
    queryKey: [QUERY_KEYS.TEAM_INFO, { teamId }],
    queryFn: () => getTeamInfo(teamId),
  });
  const { result } = data || {};
  return result;
};
