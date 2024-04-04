import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCreateTeam } from "@/api/team/postCreateTeam";

import { QUERY_KEYS } from "@/constants/queryKeys";

import type { CommonResponseType } from "@/types/common";

export const useCreateTeam = () => {
	const queryClient = useQueryClient();
	return useMutation<CommonResponseType, Error, FormData>({
		mutationFn: async (formData) => {
			const response = await postCreateTeam(formData);
			return response.data;
		},
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
