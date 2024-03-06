import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postReply } from "@/api/reply/postReply";

export const usePostReplyMutation = () => {
	const queryClient = useQueryClient();

	const postReplyMutation = useMutation({
		mutationFn: postReply,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reply"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return postReplyMutation;
};
