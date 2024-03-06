import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteReply } from "@/api/reply/deleteReply";

export const useDeleteRelpyMutation = () => {
	const queryClient = useQueryClient();

	const deleteReplyMutation = useMutation({
		mutationFn: deleteReply,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reply"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return deleteReplyMutation;
};
