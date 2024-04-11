import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postRecommend } from "@/api/recommend/postRecommend";

export const usePostRecommend = () => {
	const queryClient = useQueryClient();

	const postRecommendMutation = useMutation({
		mutationFn: postRecommend,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["siren"] });
			queryClient.invalidateQueries({ queryKey: ["question"] });
			queryClient.invalidateQueries({ queryKey: ["questionList"] });
			queryClient.invalidateQueries({ queryKey: ["sirenList"] });
			queryClient.invalidateQueries({ queryKey: ["sirenRepresentativeList"] });
			queryClient.invalidateQueries({ queryKey: ["questionRepresentativeList"] });
			queryClient.invalidateQueries({ queryKey: ["story"] });
			queryClient.invalidateQueries({ queryKey: ["recommend"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return postRecommendMutation;
};
