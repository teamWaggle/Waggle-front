import { getTeamParticipationList } from "@/api/team/getTeamParticipationList";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamParticipationListType } from "@/types/team";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useTeamParticipationList = (teamId: number) => {
  const { data } = useSuspenseQuery<DefaultApiResponseType<TeamParticipationListType>>({
    queryKey: ["teamParticipationList", { teamId }],
    queryFn: () => getTeamParticipationList(teamId),
  });
  const { result } = data;
  const { memberList } = result;
  return memberList;
};
