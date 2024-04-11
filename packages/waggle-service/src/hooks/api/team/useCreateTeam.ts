import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCreateTeam } from "@/api/team/postCreateTeam";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCreateTeam,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_TEAMS] });
      console.log("create team success");
    },
    onError: (error) => {
      console.log(error);
      console.log("create team error");
    },
  });
};
