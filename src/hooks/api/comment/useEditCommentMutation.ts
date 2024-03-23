import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putComment } from "@/api/comment/putComment";

export const useEditCommentMutation = () => {
	const queryClient = useQueryClient();

	const editCommentMutation = useMutation({
		mutationFn: putComment,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comment"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return editCommentMutation;
};
