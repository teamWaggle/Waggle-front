import { getTeamParticipationList } from "@/api/team/getTeamParticipationList";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamParticipationListType } from "@/types/team";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useTeamParticipationList = (teamId: number) => {
  const { data } = useSuspenseQuery<DefaultApiResponseType<TeamParticipationListType>>({
    queryKey: [QUERY_KEYS.TEAM_PARTICIPATION_LIST, { teamId }],
    queryFn: () => getTeamParticipationList(teamId),
  });
  const { result } = data;
  const { memberList } = result;
  return memberList;
};
