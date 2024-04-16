import { putTeamParticipation } from "@/api/team/putTeamParticipation";
import { QUERY_KEYS } from "@/constants/queryKeys";
import type { DefaultApiResponseType } from "@/types/common";
import type { TeamParticipationListType } from "@/types/team";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTeamParticipationAccept = (teamId: number, memberId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QUERY_KEYS.TEAM_PARTICIPATION_ACCEPT, { teamId }, { memberId }],
    mutationFn: (isAccept: boolean) => putTeamParticipation(teamId, memberId, isAccept),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.TEAM_PARTICIPATION_LIST, { teamId }],
      });
      const previousData = queryClient.getQueryData([
        QUERY_KEYS.TEAM_PARTICIPATION_LIST,
        { teamId },
      ]);
      queryClient.setQueryData(
        [QUERY_KEYS.TEAM_PARTICIPATION_LIST, { teamId }],
        (old: DefaultApiResponseType<TeamParticipationListType>) => {
          return {
            ...old,
            result: {
              ...old.result,
              memberList: old.result.memberList.map((member) => {
                if (member.memberId === memberId) {
                  return;
                }
                return member;
              }),
            },
          };
        }
      );
      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEAM_INFO, { teamId }] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TEAM_PARTICIPATION_LIST, { teamId }],
      });
    },
  });
};
