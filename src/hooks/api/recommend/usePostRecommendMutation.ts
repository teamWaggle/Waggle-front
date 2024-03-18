import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postRecommend } from "@/api/recommend/postRecommend";

export const usePostRecommendMutation = () => {
	const queryClient = useQueryClient();

	const postRecommendMutation = useMutation({
		mutationFn: postRecommend,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["story", "storyList", "siren", "sirenList"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return postRecommendMutation;
};
