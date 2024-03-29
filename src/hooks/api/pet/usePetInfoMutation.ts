import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { postPetInfo } from "@/api/pet/postPetInfo";

export const usePetInfoMutation = () => {
	const petInfoMutation = useMutation({
		mutationFn: postPetInfo,
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return petInfoMutation;
};
