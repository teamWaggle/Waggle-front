import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postStory } from "@/api/story/postStory";

export const usePostStoryMutation = () => {
	const queryClient = useQueryClient();

	const postStoryMutation = useMutation({
		mutationFn: postStory,
		onSuccess: () => {
			console.log("story upload success");

			queryClient.invalidateQueries({ queryKey: ["storyList"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return postStoryMutation;
};
