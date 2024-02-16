import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { getCheckNickname } from "@/api/auth/getCheckNickname";

export const useCheckNicknameMutation = () => {
	const checkNicknameMutation = useMutation({
		mutationFn: getCheckNickname,
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return checkNicknameMutation;
};
