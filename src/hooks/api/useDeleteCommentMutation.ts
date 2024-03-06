import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteComment } from "@/api/comment/deleteComment";

export const useDeleteCommentMutation = () => {
	const queryClient = useQueryClient();

	const deleteCommentMutation = useMutation({
		mutationFn: deleteComment,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comment"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return deleteCommentMutation;
};
