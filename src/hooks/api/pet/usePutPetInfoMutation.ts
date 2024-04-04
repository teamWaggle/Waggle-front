import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putPetInfo } from "@/api/pet/putPetInfo";

export const usePutPetInfoMutation = () => {
	const queryClient = useQueryClient();

	const putPetInfoMutation = useMutation({
		mutationFn: putPetInfo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["petInfo"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return putPetInfoMutation;
};
