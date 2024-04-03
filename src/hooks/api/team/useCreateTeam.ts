import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCreateTeam } from "@/api/team/postCreateTeam";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const useCreateTeam = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (formData: FormData) => postCreateTeam(formData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBER_TEAMS] });
		},
	});
};
