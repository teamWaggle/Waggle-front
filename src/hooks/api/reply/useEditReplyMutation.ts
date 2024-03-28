import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putReply } from "@/api/reply/putReply";

export const useEditReplyMutation = () => {
	const queryClient = useQueryClient();

	const editReplyMutation = useMutation({
		mutationFn: putReply,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["reply"],
			});
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return editReplyMutation;
};
