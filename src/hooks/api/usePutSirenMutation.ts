import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putSiren } from "@/api/siren/putSiren";

export const usePutSirenMutation = () => {
	const queryClient = useQueryClient();

	const putSirenMutation = useMutation({
		mutationFn: putSiren,
		onSuccess: () => {
			console.log("siren edit success");

			queryClient.invalidateQueries({ queryKey: ["siren", "sirenList"] });
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return putSirenMutation;
};
