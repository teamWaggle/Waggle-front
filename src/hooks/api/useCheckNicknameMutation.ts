import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import { getCheckNickname } from "@/api/auth/getCheckNickname";

export const useCheckNicknameMutation = () => {
	const checkNicknameMutation = useMutation({
		mutationFn: getCheckNickname,
		onSuccess: () => {
			toast.success("사용할 수 있는 닉네임입니다");
		},
		onError: () => {
			toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
		},
	});

	return { mutateCheckNickname: checkNicknameMutation.mutate };
};
