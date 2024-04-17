import { useSuspenseQuery } from "@tanstack/react-query";

import { getTeamInfo } from "@/api/team/getTeamInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useTeamInfo = (teamId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.TEAM_INFO, { teamId }],
    queryFn: () => getTeamInfo(teamId),
  });
  const { result } = data || {};
  return result;
};
