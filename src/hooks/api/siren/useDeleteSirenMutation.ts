import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteSiren } from "@/api/siren/deleteSiren";

export const useDeleteSirenMutation = () => {
	const queryClient = useQueryClient();

	const deleteSirenMutation = useMutation({
		mutationFn: deleteSiren,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["sirenList"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return deleteSirenMutation;
};
