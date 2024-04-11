import { useQuery } from "@tanstack/react-query";

import { getTeamInfo } from "@/api/team/getTeamInfo";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useTeamInfo = (teamId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.TEAM_INFO, { teamId }],
    queryFn: () => getTeamInfo(teamId),
    enabled: !!teamId,
  });
  const { result } = data || {};
  return result;
};
